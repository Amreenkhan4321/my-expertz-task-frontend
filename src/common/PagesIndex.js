import {
  Link,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
  Outlet
} from "react-router-dom";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import DataService from "../config/DataService";

import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useState } from "react";
import { LoginValidation, SignUpValidation } from "../validation/Validation";
import { Api } from "../config/Api";
export default {
  Link,
  useNavigate,
  Formik,
  Form,
  LoginValidation,
  SignUpValidation,
  toast,
  Outlet,
  DataService,
  Api,
  useLocation,
  Navigate,
  useParams,
  useEffect,
  useState,
  dayjs,
  moment,
};
