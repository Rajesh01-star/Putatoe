import TopNavbar from "./components/TopNav"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import BottomNav from "./components/BottomNav"
import Category from "./components/Category"
import Service from "./components/Service"
import PutatoeBtn from "./components/PutatoeBtn"
import { categoryObjects,ProductsObject,ProvidersObject,serviceObject } from "./support/objectSupply"

export default function Home() {
  return (
  <div className="relative bg-[#f0fefa]">
  <TopNavbar />
  <Hero />
  <Menu />
  <Category heading="Shop by category" generalObjects={categoryObjects}/>
  <Category heading="Popular Service Products" generalObjects={ProductsObject}/>
  <Category heading="All Popular Service Providers" generalObjects={ProvidersObject}/>
  <Service generalObjects={serviceObject}/>
  <PutatoeBtn />
  <BottomNav />
  </div>
  )
}
