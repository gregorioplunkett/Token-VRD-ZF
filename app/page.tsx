import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectInfoForm from '../components/ProjectInfoForm';
import ProgressSection from '../components/ProgressSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectInfoForm />
      <ProgressSection />
    </main>
  );
}


