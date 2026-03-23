export default function Table() {
    const columns = [
        "Name",
        "E-mail",
        "IG username",
        "Phone",
        "URL",
        "Primary contact",
        "Primary follow up",
        "Secondary contact",
        "Secondary follow up",
        "Stage",
        "Verdict",
    ];

    return (
        <div className="bg-white rounded-3xl shadow-primary overflow-x-auto h-full">
            <table className="w-full text-left border-collapse text-2xl">
                {/* Header */}
                <thead className="bg-primary text-offwhite">
                <tr>
                    {columns.map((col) => (
                        <th key={col} className="table-cell font-bold whitespace-nowrap">
                            <div className="flex items-center gap-2 cursor-pointer">
                                {col}
                                <span className="opacity-70">⇅</span>
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>

                {/* body */}
                <tbody>
                    <tr className="border-b border-b-lightgray transition">
                        <td className="font-bold text-primary table-cell">John Doe</td>
                        <td className="table-cell">john@example.com</td>
                        <td className="table-cell">johndoe</td>
                        <td className="table-cell">123 456 789</td>
                        <td className="table-cell">johndoe.com</td>

                        <td className="table-cell">2026-03-25</td>
                        <td className="table-cell">2026-04-2</td>


                        <td className="table-cell">2026-03-25</td>
                        <td className="table-cell">2026-03-28</td>

                        <td className="table-cell">Primary follow-up</td>
                        <td className="table-cell">In progresswwwwwwwwwwwww </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}