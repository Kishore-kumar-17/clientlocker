const promises = [
  {
    title: "Only the right files",
    text: "Staff and auditors reach a client only when they have been given access. The server checks every request.",
  },
  {
    title: "Access ends at once",
    text: "When a partner removes someone, that person is blocked on their very next request.",
  },
  {
    title: "A record of who opened what",
    text: "Every upload, open, blocked attempt, and access change goes into a log that nobody can edit.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <p className="brand">ClientLocker</p>

      <section className="hero">
        <h1>Every client file, open only to the people meant to see it.</h1>
        <p className="lead">
          A private file locker for accounting firms. Partners, staff, clients,
          and auditors each see only what they are allowed to see.
        </p>
      </section>

      <ul className="promises">
        {promises.map((promise) => (
          <li key={promise.title}>
            <h2>{promise.title}</h2>
            <p>{promise.text}</p>
          </li>
        ))}
      </ul>

      <footer className="status">
        <strong>First release.</strong> Login and file access are being built
        next. This is a practice project and uses made-up data only.
      </footer>
    </main>
  );
}
