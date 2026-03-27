interface ItemBadgeProps {
    label: string;
}

export default function TechBadge({ label }: ItemBadgeProps) {
    return (
        <span className="border border-accent px-2 py-1
                        font-body text-xs text-accent
                        hover:bg-accent hover:text-accent-content transition-colors">
            {label}
        </span>
    );
}