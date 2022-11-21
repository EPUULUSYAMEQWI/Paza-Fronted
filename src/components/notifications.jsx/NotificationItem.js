export default function NotificationItem({ data }) {
    return (
        <div className="w-3/4 bg-white rounded-lg border shadow-md mb-4">
            <div className="p-4 bg-white rounded-lg md:p-8">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                        <img
                            class="w-10 h-10 rounded-full"
                            src={`https://avatars.dicebear.com/api/adventurer/jeseleos.svg`}
                            alt=""
                        />
                        <div className="font-medium flex flex-row">
                            <div className="font-bold mr-2">{data.addedBy}</div>
                            <div className="italic text-gray-500" >Added a new {data.type}</div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        10 min ago
                    </p>
                </div>
                <h3 className="mb-3 text-xl font-extrabold tracking-tight text-blue-500 hover:underline cursor-pointer">
                    {data.title}
                </h3>
            </div>
        </div>
    );
}
