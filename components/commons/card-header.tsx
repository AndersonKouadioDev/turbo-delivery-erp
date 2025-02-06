

interface CardHeaderProps {
    title?: string;
    subTitle?: string;
}
export function CardHeader({ title, subTitle }: CardHeaderProps) {
    return (
        <div>
            <div className="h1 text-3xl font-[1000] text-red-500">{title}</div>
            {subTitle && <h3>{subTitle}</h3>}
        </div>
    )
}