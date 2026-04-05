'use client';
import ScrollVelocity from '@/components/animations/ScrollVelocity';

export const TapeSection = () => {
  return (
    <div
      id="skills"
      className="overflow-hidden relative bg-[#F0C020] border-b-4 border-[#121212]"
    >
      <ScrollVelocity
        texts={[
          'AI Engineer · Software Engineer · Full Stack Developer · LLM Systems · Graph RAG · Production AI · Agent Systems · React · Next.js · Node.js · REST APIs · WebRTC',
          'Python · PyTorch · TensorFlow · ChromaDB · Neo4j · LangChain · Ollama · Langfuse · MongoDB · PostgreSQL · C++ · Java · System Design · MLOps',
        ]}
        velocity={60}
        className="text-[#121212] text-2xl font-black tracking-widest uppercase py-4"
        parallaxClassName="py-1"
        scrollerClassName="gap-10"
        numCopies={4}
        parallaxStyle={{ opacity: 1 }}
      />
    </div>
  );
};
