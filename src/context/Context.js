import {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const tokensLocalStorage = JSON.parse(localStorage.getItem("tokens"))
    const onLoadTokens = tokensLocalStorage ? tokensLocalStorage : null
    const decodedToken = tokensLocalStorage ? jwt_decode(tokensLocalStorage.access): null
    const [user, setUser] = useState(() => decodedToken);
    const [tokens, setTokens] = useState(() => onLoadTokens);
    const [isloading, setIsLoading] = useState(null)
    const [error, setError] = useState(null);
    const [polls, setPolls] = useState([])
    const [forums, setForums] = useState([])
    const [comments, setComments] = useState([])
    const BASE_URL = 'https://paza-app.herokuapp.com'



    const navigate = useNavigate();

    //Sign in a user
    const registerUser = async (e) => {
        e.preventDefault()
        const firstname = e.target.firstname.value
        const lastname = e.target.lastname.value
        const username = e.target.username.value 
        const email = e.target.email.value
        const county = e.target.county.value
        const association = e.target.association.value
        const password1 = e.target.password1.value
        const password2 = e.target.password2.value
        
        setIsLoading(true)

        if (username && email && password1 && password2){
            if(password1 === password2){
                const response = await fetch(BASE_URL+"/api/signup/", {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(
                        {
                          "first_name":firstname,
                          "last_name":lastname,
                          "username":username,
                          "email":email,
                          "county":county,
                          "association":association,
                          "password1":password1,
                          "password2":password1   
                            
                        })
                    })
                response ? setIsLoading(false) : setIsLoading(true)
                const data = await response.json()
               
                if(response.status === 200){
                    // alert(`${username}, You were registered successfully`)
                    toast("We've successfully created your account", {
                      position: "top-center",
                      type: "success",
                      closeOnClick: true,
                      progress: null,
                  });
                    navigate("/login")
                    
                }else{
                    alert("error occured")
                }
                
                
            }else{
                alert("passwords entered do not match")
            }

        }else{
            alert("please enter all fields")
        }

       
    }

    //login a user
    const loginUser = async (e) => {
        e.preventDefault();

        setIsLoading(true)
      
       try {
        const response = await fetch(BASE_URL+"/api/token/", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})

    })


     if (response.status === 200) {
        const data = await response.json()
        setTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem("tokens", JSON.stringify(data))

        if(user.is_staff === true){
          toast("We've successfully logged in", {
            position: "top-center",
            type: "success",
            closeOnClick: true,
            progress: null,
        });
            navigate("/")
        }else{
            navigate("/user")
        }
        
        
    } else {
        const errorMessage = "Something went Wrong"
        setError(errorMessage);
        alert(error)
    }

       } catch (error) {
            console.log(error)
       }
        
       
    }

    //logging out a user 
    const logoutUser = () => {
        setTokens(null)
        setUser(null)
        localStorage.removeItem("tokens")
        navigate('/login')
    }

    //getting all questions/polls
    const getPolls = async () => {
        const response = await fetch(BASE_URL+"/api/questions/",{
          method:"GET",
          headers: {
            "Authorization": "Bearer " + String(tokens.access)
          }
        })
    
        const data = await response.json()
        if(response.status === 200) {
          setPolls(data)
          
        }else if(response.statusText === "Unauthorized"){
          logoutUser();
        }
      }

      const getForums = async () => {
        const response = await fetch(BASE_URL+"/api/forums/",{
          method:"GET",
          headers: {
            "Authorization": "Bearer " + String(tokens.access)
          }
        })
    
        const data = await response.json()
        if(response.status === 200) {
          setForums(data)
          
        }else if(response.statusText === "Unauthorized"){
          logoutUser();
        }
      }

      useEffect(() => {
        getPolls()
      }, [polls])

      useEffect(() => {
        
        getForums()
      }, [forums])

      
 

      





    const contextData = {
        registerUser, loginUser, user, tokens, logoutUser, isloading,polls, forums, comments, setComments, BASE_URL
    }



    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext