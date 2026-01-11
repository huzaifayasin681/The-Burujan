import HeroSection from '@/components/HeroSection';
import OriginStory from '@/components/OriginStory';
import ServiceCards from '@/components/ServiceCards';
import ContactForm from '@/components/ContactForm';
import TheBlueprint from '@/components/TheBlueprint';
import ProjectEstimator from '@/components/ProjectEstimator';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <OriginStory />
            <TheBlueprint />
            <ServiceCards />
            <ProjectEstimator />
            <ContactForm />
            <Footer />
        </div>
    );
}
