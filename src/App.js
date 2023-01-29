import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AskQuestion from "./Component/AskQuestion/AskQuestion";
import EditAnswer from "./Component/EditAnswer/EditAnswer";
import Editquestion from "./Component/Editquestion/Editquestion";

import HomePage from "./Component/HomePage";
import QuestionDetail from "./Component/QuestionDetaial/QuestionDetail";
import Tags from "./Component/Tags/Tags";
import Userview from "./Component/user/Userview";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm/Login";
import Register from "./Pages/Register/register";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />

          <Route path="questionDetail/:id" element={<QuestionDetail />} />
          <Route path="questionDetail/:id/edit" element={<Editquestion />} />
        </Route>
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/answeredit" element={<EditAnswer />} />
        <Route path="/user" element={<Userview />} />
        <Route
          path="/login"
          element={user !== null ? <Navigate to="/" replace /> : <LoginForm />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/Tags" element={<Tags />} />
      </Routes>
    </>
  );
}

export default App;
