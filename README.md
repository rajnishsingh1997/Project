AI-Powered PDF Question Answering System
This project is an intelligent document analysis system that allows users to upload a PDF and ask questions based on its content. The application utilizes advanced AI and natural language processing techniques to retrieve accurate answers by understanding the document's semantics.


How It Works:

Text Extraction: When a user uploads a PDF, the system extracts the raw text from the document.

Chunking: The extracted text is split into smaller, manageable chunks to preserve context and improve accuracy.

Vector Embedding Generation: Each chunk is converted into a vector embedding using a pre-trained embedding model, capturing the semantic meaning of the text.

Vector Storage: These embeddings are stored in a vector database, allowing efficient similarity search and retrieval.

Question Embedding: When the user asks a question, it is also converted into a vector embedding.

Semantic Search: The system performs a similarity search in the vector database to find the most relevant chunks related to the question.

Answer Generation: The relevant chunks are passed to a language model (like GPT) to generate a clear and accurate answer for the user.


Technologies Used:
Frontend: React
Backend: Node.js
