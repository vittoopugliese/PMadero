import {createContext, useState} from "react";

const emptyPost = {id: "", title: "", description: "", author: {authorName: "", authorImage: "", authorRole: ""}, date: "", readTime: "", category: "", image: "", tags: [], likes: 0, comments: 0};
const emptyProperty = {id: "", building: "", type: "", address: "", city: "", locality: "", price: 0, description: "", number: "", email: "", properties: {area: 0, rooms: 0, bathrooms: 0, parking: false, pool: false, security: false, elevator: false, garden: false, gym: false}, image: ""};
interface GlobalContextProps {
  postSelected: typeof emptyPost;
  setPostSelected: (post:any) => void;
  propertySelected: typeof emptyProperty;
  setPropertySelected: (property: any) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  postSelected: emptyPost,
  setPostSelected: (_post:any) => {},
  propertySelected: emptyProperty,
  setPropertySelected: (_property:any) => {},
});

export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [postSelected, setPostSelected] = useState(emptyPost);
  const [propertySelected, setPropertySelected] = useState(emptyProperty);

  return (
    <GlobalContext.Provider value={{
        postSelected, setPostSelected,
        propertySelected, setPropertySelected,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};