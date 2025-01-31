const AiCoverLetter = async ({ params }) => {
  const id = await params.id;
  return (
    <div>
      <h1>AI Cover Letter {id}</h1>
    </div>
  );
};

export default AiCoverLetter;
