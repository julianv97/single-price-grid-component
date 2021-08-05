import React from "react";

function App() {
  return (
    <div className="flex flex-col  bg-light-gray items-center justify-center">
      <main className="bg-light-gray w-full  lg:h-auto h-auto flex flex-col pt-10">
        <section className="container  mx-auto shadow-xl overflow-hidden rounded my-auto  mt-10  font-karla grid grid-cols-1 lg:grid-cols-2 w-auto lg:w-7/12	">
          <article className="bg-white col-span-0 lg:col-span-2 h-60 px-6 pt-6">
            <h2 className="text-cyan text-2xl font-extrabold">
              Join our community
            </h2>
            <h3 className="text-bright-yellow text-md py-4 font-bold">
              30-day, hassle-free money back guarantee
            </h3>
            <p className="text-grayish-blue">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </article>

          <article className="bg-cyan h-54  pb-6 pt-6 text-white">
            <div className="pl-6">
              <h2 className="text-xl">Monthly Subscription</h2>
              <p>
                <span className="text-4xl">$29</span>{" "}
                <span className="text-light-gray">per month</span>
              </p>
              <p>Full access for less than $1 a day</p>
            </div>
            <div className="flex pt-4 justify-center">
              <button className="bg-bright-yellow rounded w-5/6 mt-4 px-16 py-2 font-bold shadow-xl">
                Sign Up
              </button>
            </div>
          </article>

          <article className="bg-cyan h-60 bg-opacity-80 px-6 pr-10 pt-6  lg:pr-8 text-white">
            <h2 className="text-xl">Why Us</h2>
            <p className="text-gray-100 pt-6 ">
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </article>
        </section>
      </main>
      <footer>Challenge by Frontend Mentor. Coded by Julian Vicente.</footer>
    </div>
  );
}

export default App;
