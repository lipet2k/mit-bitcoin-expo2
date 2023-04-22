export default function About() {
    return (
        <div className="about mx-5 mt-5 flex flex-col">

            <div className="box bg-white dark:bg-zinc-800 mx-10">
                <h1 className="disclaimer-title mx-5 mt-2 dark:text-yellow-50 large-font font-semibold">Disclaimer</h1>
                <p className="disclaimer mx-5 mt-2 mb-3 small-font dark:text-yellow-50 place-self-center">I'm not particularly good at introductions and to be honest, it's really not worth dedicating an entire page to myself. But I think it's kind of customary to have a dedicated "about" page on a website. So here are some random facts that you might find interesting.</p>
            </div>

            <div className="post-columns flex-col mb-5">
                <div className="post-container flex mb-5 mt-10">
                    <Bubbles text="Asian born Chinese" color="purple-500" />

                    <Bubbles text="Student at Northeastern studying computer science" color="indigo-500" />

                    <Bubbles text="Stand up comedian" color="green-500" />
                </div>

                <div className="post-container flex mb-5 mx-40">
                    <Bubbles text="Asian born Chinese" color="blue-500" />

                    <Bubbles text="Student at Northeastern studying computer science" color="indigo-500" />

                    <Bubbles text="Stand up comedian" color="red-500" />
                </div>
            </div>

        </div>
    )
}

function Bubbles({ text, color }) {

    return (
        <div className="box bg-white dark:bg-indigo-900 mx-10">
            <ul className="dark:text-yellow-50 mx-5 mt-2 mb-3 facts-about-me small-font">
                <li>{text}</li>
            </ul>
        </div>
    )
}