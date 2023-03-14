import React from "react"
import ReactDOM from "react-dom/client"

//import SignupForm from "./SignupForm"
import InviteFriends from "./InviteForm"

function App() {
  return <InviteFriends />
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
