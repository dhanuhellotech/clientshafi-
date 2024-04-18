import React, { useState, lazy, Suspense ,useEffect} from "react";
import { Button, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Route, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "../ProtectedRoutes/Home";
import {useSelector,useDispatch} from "react-redux"
import { openMenu,closeMenu } from "../Redux/MenuSlice";
import Products from "../ProtectedRoutes/products/Products";
import Admission from "../ProtectedRoutes/admission/Admission";
import Contact from '../ProtectedRoutes/contact/Contact.jsx'
import Enquiry from "../ProtectedRoutes/Enquiry/Enquiry.jsx";
import Treatments from "../ProtectedRoutes/Treatment/Treatment.jsx";
import Course from "../ProtectedRoutes/course/course.jsx";
import Tobbar from "../ProtectedRoutes/topbar/Topbar.jsx";
import Address from "../ProtectedRoutes/address/Address.jsx";
import Blog from "../ProtectedRoutes/blogs/Blog.jsx";
import Review from "../ProtectedRoutes/Reviews/Review.jsx"
import Doctor from "../ProtectedRoutes/doctors/Doctor.jsx";
import ClientRev from "../ProtectedRoutes/clientreviews/ClientRev.jsx";
import Popup from "../ProtectedRoutes/popup/Popup.jsx";
import Loader from "../../Loader.js";


const LazyProducts = lazy(() => import("../ProtectedRoutes/products/Products"));
const LazyAdmission = lazy(() => import("../ProtectedRoutes/admission/Admission"));
const LazyContact = lazy(() => import("../ProtectedRoutes/contact/Contact"));
const LazyEnquiry = lazy(() => import("../ProtectedRoutes/Enquiry/Enquiry"));
const LazyTreatments = lazy(() => import("../ProtectedRoutes/Treatment/Treatment"));
const LazyCourse = lazy(() => import("../ProtectedRoutes/course/course"));
const LazyTobbar = lazy(() => import("../ProtectedRoutes/topbar/Topbar"));
const LazyAddress = lazy(() => import("../ProtectedRoutes/address/Address"));
const LazyReview = lazy(() => import("../ProtectedRoutes/Reviews/Review"));
const LazyBlog = lazy(() => import("../ProtectedRoutes/blogs/Blog"));
const LazyDoctor = lazy(() => import("../ProtectedRoutes/doctors/Doctor"));
const LazyClientRev = lazy(() => import("../ProtectedRoutes/clientreviews/ClientRev"));
const LazyPopup = lazy(() => import("../ProtectedRoutes/popup/Popup"));

const DashboardLayout = ({ children,showMenu}) => {
  const dispatch = useDispatch()
  const [setnewDisplay, setsetNewDisplay] = useState(false)

  const displayData = useSelector(state=>state.menu.value.display)

  useEffect(()=>{
    console.log(displayData)
  },[displayData])
 
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={12}
        sm={0}
        sx={{
          display: { xs: displayData ? "block" : "none", sm: "none" },
          backgroundColor: "#4D0366",
          height: "100vh",
          overflowY:"scroll",
          py:3,
          boxShadow:"2px 2px 2px 0.3 black"
        }}
      >
        <Button onClick={()=>dispatch(closeMenu())}>
          <CloseIcon />
        </Button>
        {children}
      </Grid>
      <Grid
        item
        xs={0}
        sm={3}
        lg={2}
        sx={{
          backgroundColor: "#4D0366",
          height: "100vh",
          overflowY:"scroll",
          py:3,
          display: { xs: "none", sm: "block" },
        }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        lg={10}
        direction="column"
        sx={{ display: { xs: displayData ? "none" : "block", sm: "block" } }}
      >
        <Grid
          item
          sx={{
            height: { xs: "60px", sm: "0px" },
            display: { xs: displayData ? "none" : "block", sm: "none" },
          }}
        >
          <Box width="100%" height="100%" justifyContent="center">
            <Button onClick={()=>dispatch(openMenu())}>
              <MenuIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item p={2} height={'100vh'}sx={{overflowY:'scroll'}}>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/product"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyProducts />
      </Suspense>
    }
  />
  <Route
    path="/admission"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyAdmission />
      </Suspense>
    }
  />
  <Route
    path="/contact"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyContact />
      </Suspense>
    }
  />
  <Route
    path="/enquiry"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyEnquiry />
      </Suspense>
    }
  />
  <Route
    path="/treatments"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyTreatments />
      </Suspense>
    }
  />
  <Route
    path="/course"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyCourse />
      </Suspense>
    }
  />
  <Route
    path="/top"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyTobbar />
      </Suspense>
    }
  />
  <Route
    path="/address"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyAddress />
      </Suspense>
    }
  />
  <Route
    path="/review"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyReview />
      </Suspense>
    }
  />
  <Route
    path="/blog"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyBlog />
      </Suspense>
    }
  />
  <Route
    path="/doctor"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyDoctor />
      </Suspense>
    }
  />
  <Route
    path="/clientreview"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyClientRev />
      </Suspense>
    }
  />
  <Route
    path="/popup"
    element={
      <Suspense fallback={<Loader open={true} />}>
        <LazyPopup />
      </Suspense>
    }
  />
</Routes>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
