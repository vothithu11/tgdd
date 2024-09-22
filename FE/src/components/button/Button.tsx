function Button({ title, color, type, bgBtn, ...props }) {
    const buttonType = type || 'button';
    return (
        <button
            type={buttonType}
            className={`py-1.5 px-2 border-2 border-${color}-500 rounded-md text-sm max-lg:text-xs cursor-pointer bg-[#f6f7f8] text-${color}-500 hover:text-white active:text-white ${bgBtn}`}
            {...props}
        >
            {title}
        </button>
    );
}

export default Button;
