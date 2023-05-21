import TopNavbar from "./components/TopNav"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import BottomNav from "./components/BottomNav"
import Something from "./components/Something"

export default function Home() {
  return (
  <>
  <TopNavbar />
  <Hero />
  <hr className="border-8 rounded-lg" />
  <Menu />
  <Something />
  <BottomNav />
  </>
  )
}
