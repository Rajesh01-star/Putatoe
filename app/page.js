import TopNavbar from "./components/TopNav"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import BottomNav from "./components/BottomNav"
import Category from "./components/Category"
import Service from "./components/Service"
import PutatoeBtn from "./components/PutatoeBtn"
import { categoryObjects } from "./support/objectSupply"

export default function Home() {
  return (
  <div className="relative">
  <TopNavbar />
  <Hero />
  <hr className="border-8 rounded-lg" />
  <Menu />
  <hr className="border-8 rounded-lg" />
  <Category heading="Shop by category" generalObjects={categoryObjects}/>
  <Category heading="Popular Service Products" generalObjects={categoryObjects}/>
  <Category heading="All Popular Service Providers" generalObjects={categoryObjects}/>
  <Service generalObjects={categoryObjects}/>
  <PutatoeBtn />
  <BottomNav />
  </div>
  )
}
