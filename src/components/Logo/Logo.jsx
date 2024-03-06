
export function Logo({ image, title, subtitle }) {
    return (
        <>
            <div className="flex">
                <img className="h-10 w-10" src={image} alt="Logo" />
                <div className="text-2xl font-normal pt-2">{title}</div>
            </div> 
            <div className="flex flex-col pl-1">
                <div className="whitespace-nowrap ml-1">{subtitle}</div>
            </div>
        </>
    );
}