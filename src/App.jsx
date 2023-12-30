import './App.css'
import Header from './components/Header'
import BecomeTeacher from './components/BecomeTeacher'
import Blogs from './components/Blogs'
import BrowseByCategory from './components/BrowseByCategory'
import Community from './components/Community'
import Email from './components/Email'
import Footer from './components/Footer'
import MeetTeacher from './components/MeetTeacher'
import Navbar from './components/Navbar'
import Reason from './components/Reason'
import Deatails from './components/Deatails'
import DiscoverClasses from './components/DiscoverClasses'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Deatails />
      <DiscoverClasses />
      <BrowseByCategory/>
      <Reason />
      <Community/>
      <MeetTeacher/>
      <BecomeTeacher />
      <Blogs />
      <Email />
      <Footer />
    </>
  )
}

export default App
