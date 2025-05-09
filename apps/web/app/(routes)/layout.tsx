import Footer from "@/components/custom/footer";
import Header from "@/components/custom/navbar/header";
import OnboardingBanner from "@/components/onboarding-banner";
import SalesBanner from "@/components/sales.banner";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full">
      <OnboardingBanner />
      <SalesBanner />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
