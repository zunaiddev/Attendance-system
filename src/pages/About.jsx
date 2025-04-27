function About() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
            <section className="space-y-8 mb-16">
                <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                    About AttendEase
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 transform hover:scale-101 transition duration-300">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            AttendEase is a lightweight, fast, and student-driven attendance management platform
                            designed to
                            solve a real problem faced by universities with poor internet connectivity and outdated
                            systems.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Created by a university student, AttendEase allows students, CRs, and teachers to easily
                            record,
                            track, and share attendance data — even with limited network access.
                        </p>
                    </div>
                    <div
                        className="bg-gradient-to-br from-blue-500/10 to-green-400/10 rounded-xl p-6 hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Who is this for?</h3>
                        <ul className="list-none space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <span className="mr-2">👨‍🎓</span> Students tired of paper-based attendance
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">👥</span> Class Representatives managing attendance
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">👨‍🏫</span> Teachers seeking reliable attendance tracking
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">🏛️</span> Colleges needing a modern ERP alternative
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-16 transform hover:scale-101 transition duration-300">
                <div className="bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-xl p-8">
                    <h2 className="text-3xl font-semibold text-blue-400 mb-6">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        To make attendance easy, digital, and accessible for every student and teacher — with or without
                        fast internet. We're transforming how attendance is managed in educational institutions.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-blue-400">Key Features</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Quick student and teacher sign-up
                        </li>
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Fast dashboard to mark attendance (P / A)
                        </li>
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Share attendance data with teachers in one click
                        </li>
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Export attendance to CSV or PDF
                        </li>
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Works offline using localStorage
                        </li>
                        <li className="flex items-center transform hover:translate-x-2 transition">
                            <span className="text-green-400 mr-3">✓</span>
                            Only verified class/college members can access data
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-green-400/10 rounded-xl p-8">
                    <h2 className="text-3xl font-semibold text-blue-400 mb-6">Future Goals</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center">
                            <span className="text-blue-400 mr-3">⟩</span>
                            Integration with University APIs
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-400 mr-3">⟩</span>
                            Biometric & QR-based check-ins
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-400 mr-3">⟩</span>
                            Advanced Analytics Dashboard
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-400 mr-3">⟩</span>
                            Multi-language Support
                        </li>
                    </ul>
                </div>
            </section>

            <section
                className="bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-xl p-8 transform hover:scale-101 transition duration-300">
                <h2 className="text-3xl font-semibold text-blue-400 mb-6">Privacy First</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    We believe in privacy and security. Only authorized users from the same course, year, and section
                    can view the
                    data. All information is encrypted and stored securely.
                </p>
            </section>
        </div>
    );
}

export default About;