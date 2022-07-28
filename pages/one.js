// import { useState } from "react/cjs/react.production.min";
import Card from "../components/PageOne/Card";

export const getStaticProps = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { jmekeri: data }
  }
}

const Page = ({ jmekeri }) => {
  // TODO: loading effect
  // const [loading, setLoading] = useState(false)
  return (
    <div className="flex gap-4 flex-col justify-center max-w-full items-center h-screen mx-auto w-full bg-gradient-to-r from-purple-500 to-red-500">
      {jmekeri.map(jmeker => (
        // loading ? (<Card key={jmeker.id} name={jmeker.name} email={jmeker.email} />) : ("Loading...")
        < Card key={jmeker.id} name={jmeker.name} email={jmeker.email} />

      ))}
    </div>
  )
}

export default Page
