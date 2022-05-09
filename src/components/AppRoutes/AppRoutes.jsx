import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from '../../router';
import { customerRoutes } from '../../router';
import { moderatorRoutes } from '../../router';
import { adminRoutes } from '../../router';

export const AppRoutes = () => {

    const user = useSelector(state => state.user.user)

    const getUserRole = (user) => {
        switch (user.role) {
            case 'customer':
                return customerRoutes;

            case 'moderator':
                return moderatorRoutes;

            case 'admin':
                return adminRoutes;

            default:
                return publicRoutes;
        }
    }


    return (
        <Routes>
            {user.isAuth
                ?
                getUserRole(user).map(route =>
                    <Route key={route.path} path={route.path} element={route.element} />
                )
                :
                publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element} />
                )
            }
        </Routes>
    )
};