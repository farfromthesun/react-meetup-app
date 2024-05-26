function Error({ error }) {
  return (
    <section>
      <h2>An Error occured:</h2>
      <p>{error.message}</p>
    </section>
  );
}
export default Error;
