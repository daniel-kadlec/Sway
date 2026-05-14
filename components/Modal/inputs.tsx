export function Label({ children }: { children: React.ReactNode }) {
    return (
        <label className="block text-xl font-medium text-primary mb-1 ml-0.5">
            {children}
        </label>
    );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="w-full rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
    );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ value, ...props }: SelectProps) {
    const hasValue = !!value;

    return (
        <select
            {...props}
            value={value}
            className="w-full rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
            {!hasValue && (
                <option value="" hidden>
                    Select a platform
                </option>
            )}

            <option value="INSTAGRAM">Instagram</option>
            <option value="EMAIL">Email</option>
            <option value="PHONE">Phone</option>

            {hasValue && (
                <option value="" className="text-error">
                    Remove platform
                </option>
            )}
        </select>
    );
}