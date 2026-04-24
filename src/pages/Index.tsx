import PortalHeader from "@/components/portal/PortalHeader";
import PortalHero from "@/components/portal/PortalHero";
import AppDirectory from "@/components/portal/AppDirectory";
import PortalFooter from "@/components/portal/PortalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main>
        <PortalHero />
        <AppDirectory />
      </main>
      <PortalFooter />
    </div>
  );
};

export default Index;
