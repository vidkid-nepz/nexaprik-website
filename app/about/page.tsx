import Container from "@/components/layout/Container";
import { Award, Users, Shield, Target } from "lucide-react";

export const metadata = {
    title: "About Us",
    description: "Learn about Nepal Adventure Trekking - 20+ years of Himalayan expertise",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-primary-900 text-white py-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                            About <span className="text-secondary-400">Nepal Adventure</span>
                        </h1>
                        <p className="text-xl text-primary-100">
                            Your trusted partner for unforgettable Himalayan experiences since 2003
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading font-bold text-4xl text-center mb-12">
                            Our <span className="text-primary-600">Story</span>
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Founded in 2003 by a team of passionate Sherpa guides and mountaineers,
                                Nepal Adventure Trekking has been at the forefront of adventure tourism in Nepal
                                for over two decades. What started as a small local operation has grown into one
                                of Nepal's most trusted and respected trekking companies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our deep-rooted connection to the Himalayas, combined with modern safety standards
                                and sustainable tourism practices, ensures that every trek with us is not just an
                                adventure, but a transformative experience that respects local communities and the
                                environment.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                With hundreds of successful expeditions and thousands of happy trekkers from around
                                the world, we pride ourselves on delivering personalized service, expert guidance,
                                and unforgettable memories in the world's greatest mountain range.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Mission & Values */}
            <section className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="text-primary-600" size={40} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl mb-3">Our Mission</h3>
                            <p className="text-gray-600">
                                To provide world-class trekking experiences that are safe, sustainable, and truly unforgettable
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-secondary-600" size={40} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl mb-3">Local Expertise</h3>
                            <p className="text-gray-600">
                                All our guides are certified, experienced locals with deep knowledge of the Himalayas
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-accent-600" size={40} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl mb-3">Safety First</h3>
                            <p className="text-gray-600">
                                Comprehensive safety protocols, modern equipment, and emergency evacuation plans
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-primary-600" size={40} />
                            </div>
                            <h3 className="font-heading font-semibold text-xl mb-3">Certified Excellence</h3>
                            <p className="text-gray-600">
                                Registered with Nepal Tourism Board, TAAN, and NMA with all required licenses
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-primary-900 text-white">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="font-heading font-bold text-5xl mb-2 text-secondary-400">20+</div>
                            <div className="text-primary-200">Years in Business</div>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-5xl mb-2 text-secondary-400">5000+</div>
                            <div className="text-primary-200">Happy Clients</div>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-5xl mb-2 text-secondary-400">50+</div>
                            <div className="text-primary-200">Expert Guides</div>
                        </div>
                        <div>
                            <div className="font-heading font-bold text-5xl mb-2 text-secondary-400">100%</div>
                            <div className="text-primary-200">Safety Record</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section className="py-16">
                <Container>
                    <h2 className="font-heading font-bold text-4xl text-center mb-12">
                        Meet Our <span className="text-primary-600">Team</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Pemba Sherpa",
                                role: "Founder & Lead Guide",
                                bio: "20+ years of mountaineering experience, summited Everest 8 times",
                            },
                            {
                                name: "Mingma Dorje",
                                role: "Operations Manager",
                                bio: "Expert in trek logistics and sustainable tourism practices",
                            },
                            {
                                name: "Sarah Williams",
                                role: "Customer Relations",
                                bio: "Multilingual support specialist ensuring smooth communication",
                            },
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-5xl font-bold text-primary-600">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
                                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
