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

export function Select(props: React.InputHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            {...props}
            className="w-full rounded-xl border border-lightgray px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <option>Instagram</option>
            <option>Email</option>
            <option>Phone</option>
        </select>
    );
}