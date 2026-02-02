import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import MembershipSection from '@/components/MembershipSection'
import FeaturesSection from '@/components/FeaturesSection'
import WellnessHub from '@/components/WellnessHub'
import GallerySection from '@/components/GallerySection'
import AppDownload from '@/components/AppDownload'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cult-white overflow-x-hidden w-full">
      <Navigation />
      <HeroSection />
      <MembershipSection />
      <FeaturesSection />
      <WellnessHub />
      <GallerySection />
      <AppDownload />
      <Footer />
    </main>
  )
}
