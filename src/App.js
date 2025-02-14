import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Layout from './components/Layout/Layout';
import Wellcome from 'components/Wellcome/Wellcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from 'components/ForgotPassword/ForgotPassword';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import Diary from './components/Diary/Diary';
import RecommendedFood from './components/RecommendedFood/RecommendedFood';
import Settings from './components/Settings/Settings';
import UserGoal from 'components/UserData/UserGoal';
import UserGender from 'components/UserData/UserGender';
import UserBody from 'components/UserData/UserBody';
import UserActivity from 'components/UserData/UserActivity';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          exact
          index
          restricted
          element={
            <PublicRoute>
              <Wellcome />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="signup"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="usergoal"
          element={
            <PublicRoute>
              <UserGoal />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="usergender"
          element={
            <PublicRoute>
              <UserGender />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="userbody"
          element={
            <PublicRoute>
              <UserBody />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="useractivity"
          element={
            <PublicRoute>
              <UserActivity />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="signin"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="main"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="diary"
          element={
            <PrivateRoute>
              <Diary />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="recommended"
          element={
            <PrivateRoute>
              <RecommendedFood />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
