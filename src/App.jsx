import "./App.css";
import {
  ClerkProvider,
  SignedIn,
  SignInButton,
  SignedOut,
  SignOutButton,
} from "@clerk/clerk-react";
function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </ClerkProvider>
  );
}
export default App;
