import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fadeIn">
            <section className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                    Terms and Conditions
                </h1>

                <div className="grid gap-6 sm:gap-8">
                    <section
                        className="bg-gradient-to-br from-blue-500/10 to-green-400/10 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                            Acceptance of Terms
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                            By accessing or using AttendEase, you acknowledge that you have read,
                            understood, and agree to be bound by these Terms and Conditions. If
                            you do not agree with these terms, please do not use our platform.
                        </p>
                    </section>

                    <section
                        className="bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                            Data Privacy & Ownership
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                            Your privacy is our priority. We commit to never selling or sharing
                            your data with third parties. Your attendance data remains yours and
                            is only accessible to you and the teachers you explicitly choose to
                            share it with. You maintain full control over your personal information
                            at all times.
                        </p>
                    </section>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <section
                            className="bg-gradient-to-br from-blue-500/10 to-green-400/10 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                                Usage Guidelines
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                AttendEase is designed specifically for academic attendance tracking
                                purposes. Users agree to utilize the platform solely for recording and
                                managing attendance in educational contexts. Any use outside these
                                parameters is not permitted.
                            </p>
                        </section>

                        <section
                            className="bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                                Data Sharing
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                You have complete control over your attendance data. The platform
                                allows sharing of attendance records only with teachers you
                                specifically authorize. You can modify or revoke these sharing
                                permissions at any time through your account settings.
                            </p>
                        </section>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <section
                            className="bg-gradient-to-br from-blue-500/10 to-green-400/10 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                                Security
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                We implement industry-standard security measures to protect your data.
                                While we maintain robust security protocols, please understand that no
                                method of electronic storage or transmission is 100% secure. We cannot
                                guarantee absolute security but continuously work to protect your
                                information.
                            </p>
                        </section>

                        <section
                            className="bg-gradient-to-r from-blue-500/20 to-green-400/20 rounded-xl p-4 sm:p-6 lg:p-8 transform hover:scale-101 transition duration-300">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-3 sm:mb-4">
                                Changes to Terms
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                We reserve the right to modify these terms at any time. When we make
                                changes, we will notify you through the platform and update the
                                modification date at the top of this page. Continuing to use AttendEase
                                after changes indicates your acceptance of the updated terms.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <div className="text-center text-gray-300 text-sm sm:text-base mt-8 sm:mt-12">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default Terms;