

export default function Tags() {

    const dateFormatter = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: "long", year: "numeric" });
    return (
        <div className="flex justify-between">
            <p className="dark:text-slate-200">
                <span className="font-medium border-b border-dashed border-pink-400">Latest Posts
                </span>
            </p>
            <p className="dark:text-slate-200">
                <span className="font-medium">Today </span>: {dateFormatter.format(new Date())}
            </p>
        </div>
    )
}

