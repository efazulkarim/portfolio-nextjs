// Use client-side indication for clarity and import useEffect
"use client";
import { useEffect, useState } from "react"; // Added useEffect to the import
import { useRouter } from "next/router";
import PageBox from "@/components/common/PageBox";
import NavBar from "@/components/navbar/NavBar";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
import HomeSection4 from "@/components/home/Section4";
import HomeSection5 from "@/components/home/Section5";
import HomeSection6 from "@/components/home/Section6";
import Head from "next/head";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'a1cc279e-cc0c-41cb-ae9b-769883f80d37',
  clientToken: 'pub35d708aad60885f0e22e4c7c634c78f2',
  site: 'us5.datadoghq.com',
  service: 'efazul_portfolio',
  env: 'production',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

export default function Home() {
  const [current, setCurrent] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      datadogRum.startView(url); // Track page view on route change
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <PageBox>
      <Head>
        <title>Kazi Efazul Karim</title>
        <meta name="description" content="Fullstack software engineer based in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar current={current} />
      <HomeSection1 current={current} setCurrent={setCurrent} />
      <HomeSection2 current={current} setCurrent={setCurrent} />
      <HomeSection4 current={current} setCurrent={setCurrent} />
      <HomeSection5 current={current} setCurrent={setCurrent} />
      <HomeSection6 current={current} setCurrent={setCurrent} />
    </PageBox>
  );
}
