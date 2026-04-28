export const faqQuery = `*[_type == "faq"] | order(orderRank asc){
  _id, question, answer, category
}`;
