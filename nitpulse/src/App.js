import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SGPAPage from './pages/SGPAPage';
import CGPAPage from './pages/CGPAPage';
import VTUResultsPage from './pages/VTUResultsPage';
import VTULinksPage from './pages/VTULinksPage';
import LatestUpdatesPage from './pages/LatestUpdatesPage';
import AddResourcePage from './pages/AddResourcePage';
import BranchesPage from './pages/BranchesPage';
import SchemePage from './pages/SchemePage';
import SemesterPage from './pages/SemesterPage';
import SemesterDetails from './pages/SemesterDetails';

//CSE
//  2022 scheme 6th semester
import NotesCSE20226th from "./components/CSE/2022/6th/Notes";
import AssignmentsCSE20226th from "./components/CSE/2022/6th/Assignments";
import MQPCSE20226th from "./components/CSE/2022/6th/MQP";
import PassingPackageCSE20226th from "./components/CSE/2022/6th/PassingPackage";
import LabProgramsCSE20226th from "./components/CSE/2022/6th/LabPrograms";
// 2022 7th semester
import NotesCSE20227th from "./components/CSE/2022/7th/Notes";
import AssignmentsCSE20227th from "./components/CSE/2022/7th/Assignments";
import MQPCSE20227th from "./components/CSE/2022/7th/MQP";
import PassingPackageCSE20227th from "./components/CSE/2022/7th/PassingPackage";
import LabProgramsCSE20227th from "./components/CSE/2022/7th/LabPrograms";
//2023 5th semester

import NotesCSE20235th from "./components/CSE/2023/5th/Notes";
import AssignmentsCSE20235th from "./components/CSE/2023/5th/Assignments";
import MQPCSE20235th from "./components/CSE/2023/5th/MQP";
import PassingPackageCSE20235th from "./components/CSE/2023/5th/PassingPackage";
import LabProgramsCSE20235th from "./components/CSE/2023/5th/LabPrograms";
//2023 4th semester
import NotesCSE20234th from "./components/CSE/2023/4th/Notes";
import AssignmentsCSE20234th from "./components/CSE/2023/4th/Assignments";
import MQPCSE20234th from "./components/CSE/2023/4th/MQP";
import PassingPackageCSE20234th from "./components/CSE/2023/4th/PassingPackage";
import LabProgramsCSE20234th from "./components/CSE/2023/4th/LabPrograms";
//2024 3rd semester
import NotesCSE20243rd from "./components/CSE/2024/3rd/Notes";
import AssignmentsCSE20243rd from "./components/CSE/2024/3rd/Assignments";
import MQPCSE20243rd from "./components/CSE/2024/3rd/MQP";
import PassingPackageCSE20243rd from "./components/CSE/2024/3rd/PassingPackage";
import LabProgramsCSE20243rd from "./components/CSE/2024/3rd/LabPrograms";
//2024 2nd semester
import NotesCSE20242nd from "./components/CSE/2024/2nd/Notes";
import AssignmentsCSE20242nd from "./components/CSE/2024/2nd/Assignments";
import MQPCSE20242nd from "./components/CSE/2024/2nd/MQP";
import PassingPackageCSE20242nd from "./components/CSE/2024/2nd/PassingPackage";
import LabProgramsCSE20242nd from "./components/CSE/2024/2nd/LabPrograms";
//2025 1st semester
import NotesCSE20251st from "./components/CSE/2025/1st/Notes";
import AssignmentsCSE20251st from "./components/CSE/2025/1st/Assignments";
import MQPCSE20251st from "./components/CSE/2025/1st/MQP";
import PassingPackageCSE20251st from "./components/CSE/2025/1st/PassingPackage";
import LabProgramsCSE20251st from "./components/CSE/2025/1st/LabPrograms";

//CIVIL
//  2022 scheme 6th semester
import NotesCIVIL20226th from "./components/CIVIL/2022/6th/Notes";
import AssignmentsCIVIL20226th from "./components/CIVIL/2022/6th/Assignments";
import MQPCIVIL20226th from "./components/CIVIL/2022/6th/MQP";
import PassingPackageCIVIL20226th from "./components/CIVIL/2022/6th/PassingPackage";
import LabProgramsCIVIL20226th from "./components/CIVIL/2022/6th/LabPrograms";
// 2022 7th semester
import NotesCIVIL20227th from "./components/CIVIL/2022/7th/Notes";
import AssignmentsCIVIL20227th from "./components/CIVIL/2022/7th/Assignments";
import MQPCIVIL20227th from "./components/CIVIL/2022/7th/MQP";
import PassingPackageCIVIL20227th from "./components/CIVIL/2022/7th/PassingPackage";
import LabProgramsCIVIL20227th from "./components/CIVIL/2022/7th/LabPrograms";
//2023 5th semester

import NotesCIVIL20235th from "./components/CIVIL/2023/5th/Notes";
import AssignmentsCIVIL20235th from "./components/CIVIL/2023/5th/Assignments";
import MQPCIVIL20235th from "./components/CIVIL/2023/5th/MQP";
import PassingPackageCIVIL20235th from "./components/CIVIL/2023/5th/PassingPackage";
import LabProgramsCIVIL20235th from "./components/CIVIL/2023/5th/LabPrograms";
//2023 4th semester
import NotesCIVIL20234th from "./components/CIVIL/2023/4th/Notes";
import AssignmentsCIVIL20234th from "./components/CIVIL/2023/4th/Assignments";
import MQPCIVIL20234th from "./components/CIVIL/2023/5th/MQP";
import PassingPackageCIVIL20234th from "./components/CIVIL/2023/4th/PassingPackage";
import LabProgramsCIVIL20234th from "./components/CIVIL/2023/4th/LabPrograms";
//2024 3rd semester
import NotesCIVIL20243rd from "./components/CIVIL/2024/3rd/Notes";
import AssignmentsCIVIL20243rd from "./components/CIVIL/2024/3rd/Assignments";
import MQPCIVIL20243rd from "./components/CIVIL/2024/3rd/MQP";
import PassingPackageCIVIL20243rd from "./components/CIVIL/2024/3rd/PassingPackage";
import LabProgramsCIVIL20243rd from "./components/CIVIL/2024/3rd/LabPrograms";
//2024 2nd semester
import NotesCIVIL20242nd from "./components/CIVIL/2024/2nd/Notes";
import AssignmentsCIVIL20242nd from "./components/CIVIL/2024/2nd/Assignments";
import MQPCIVIL20242nd from "./components/CIVIL/2024/2nd/MQP";
import PassingPackageCIVIL20242nd from "./components/CIVIL/2024/2nd/PassingPackage";
import LabProgramsCIVIL20242nd from "./components/CIVIL/2024/2nd/LabPrograms";
//2025 1st semester
import NotesCIVIL20251st from "./components/CIVIL/2025/1st/Notes";
import AssignmentsCIVIL20251st from "./components/CIVIL/2025/1st/Assignments";
import MQPCIVIL20251st from "./components/CIVIL/2025/1st/MQP";
import PassingPackageCIVIL20251st from "./components/CIVIL/2025/1st/PassingPackage";
import LabProgramsCIVIL20251st from "./components/CIVIL/2025/1st/LabPrograms";

//ECE
//  2022 scheme 6th semester
import NotesECE20226th from "./components/ECE/2022/6th/Notes";
import AssignmentsECE20226th from "./components/ECE/2022/6th/Assignments";
import MQPECE20226th from "./components/ECE/2022/6th/MQP";
import PassingPackageECE20226th from "./components/ECE/2022/6th/PassingPackage";
import LabProgramsECE20226th from "./components/ECE/2022/6th/LabPrograms";
// 2022 7th semester
import NotesECE20227th from "./components/ECE/2022/7th/Notes";
import AssignmentsECE20227th from "./components/ECE/2022/7th/Assignments";
import MQPECE20227th from "./components/ECE/2022/7th/MQP";
import PassingPackageECE20227th from "./components/ECE/2022/7th/PassingPackage";
import LabProgramsECE20227th from "./components/ECE/2022/7th/LabPrograms";
//2023 5th semester

import NotesECE20235th from "./components/ECE/2023/5th/Notes";
import AssignmentsECE20235th from "./components/ECE/2023/5th/Assignments";
import MQPECE20235th from "./components/CSE/2023/5th/MQP";
import PassingPackageECE20235th from "./components/ECE/2023/5th/PassingPackage";
import LabProgramsECE20235th from "./components/ECE/2023/5th/LabPrograms";
//2023 4th semester
import NotesECE20234th from "./components/ECE/2023/4th/Notes";
import AssignmentsECE20234th from "./components/ECE/2023/4th/Assignments";
import MQPECE20234th from "./components/ECE/2023/5th/MQP";
import PassingPackageECE20234th from "./components/ECE/2023/4th/PassingPackage";
import LabProgramsECE20234th from "./components/ECE/2023/4th/LabPrograms";
//2024 3rd semester
import NotesECE20243rd from "./components/ECE/2024/3rd/Notes";
import AssignmentsECE20243rd from "./components/ECE/2024/3rd/Assignments";
import MQPECE20243rd from "./components/ECE/2024/3rd/MQP";
import PassingPackageECE20243rd from "./components/ECE/2024/3rd/PassingPackage";
import LabProgramsECE20243rd from "./components/ECE/2024/3rd/LabPrograms";
//2024 2nd semester
import NotesECE20242nd from "./components/ECE/2024/2nd/Notes";
import AssignmentsECE20242nd from "./components/ECE/2024/2nd/Assignments";
import MQPECE20242nd from "./components/ECE/2024/2nd/MQP";
import PassingPackageECE20242nd from "./components/ECE/2024/2nd/PassingPackage";
import LabProgramsECE20242nd from "./components/ECE/2024/2nd/LabPrograms";
//2025 1st semester
import NotesECE20251st from "./components/ECE/2025/1st/Notes";
import AssignmentsECE20251st from "./components/ECE/2025/1st/Assignments";
import MQPECE20251st from "./components/ECE/2025/1st/MQP";
import PassingPackageECE20251st from "./components/ECE/2025/1st/PassingPackage";
import LabProgramsECE20251st from "./components/ECE/2025/1st/LabPrograms";

//EEE
//  2022 scheme 6th semester
import NotesEEE20226th from "./components/EEE/2022/6th/Notes";
import AssignmentsEEE20226th from "./components/EEE/2022/6th/Assignments";
import MQPEEE20226th from "./components/EEE/2022/6th/MQP";
import PassingPackageEEE20226th from "./components/EEE/2022/6th/PassingPackage";
import LabProgramsEEE20226th from "./components/EEE/2022/6th/LabPrograms";
// 2022 7th semester
import NotesEEE20227th from "./components/EEE/2022/7th/Notes";
import AssignmentsEEE20227th from "./components/EEE/2022/7th/Assignments";
import MQPEEE20227th from "./components/EEE/2022/7th/MQP";
import PassingPackageEEE20227th from "./components/EEE/2022/7th/PassingPackage";
import LabProgramsEEE20227th from "./components/EEE/2022/7th/LabPrograms";
//2023 5th semester

import NotesEEE20235th from "./components/EEE/2023/5th/Notes";
import AssignmentsEEE20235th from "./components/EEE/2023/5th/Assignments";
import MQPEEE20235th from "./components/EEE/2023/5th/MQP";
import PassingPackageEEE20235th from "./components/EEE/2023/5th/PassingPackage";
import LabProgramsEEE20235th from "./components/EEE/2023/5th/LabPrograms";
//2023 4th semester
import NotesEEE20234th from "./components/EEE/2023/4th/Notes";
import AssignmentsEEE20234th from "./components/EEE/2023/4th/Assignments";
import MQPEEE20234th from "./components/EEE/2023/5th/MQP";
import PassingPackageEEE20234th from "./components/EEE/2023/4th/PassingPackage";
import LabProgramsEEE20234th from "./components/EEE/2023/4th/LabPrograms";
//2024 3rd semester
import NotesEEE20243rd from "./components/EEE/2024/3rd/Notes";
import AssignmentsEEE20243rd from "./components/CSE/2024/3rd/Assignments";
import MQPEEE20243rd from "./components/EEE/2024/3rd/MQP";
import PassingPackageEEE20243rd from "./components/EEE/2024/3rd/PassingPackage";
import LabProgramsEEE20243rd from "./components/EEE/2024/3rd/LabPrograms";
//2024 2nd semester
import NotesEEE20242nd from "./components/EEE/2024/2nd/Notes";
import AssignmentsEEE20242nd from "./components/EEE/2024/2nd/Assignments";
import MQPEEE20242nd from "./components/CSE/2024/2nd/MQP";
import PassingPackageEEE20242nd from "./components/EEE/2024/2nd/PassingPackage";
import LabProgramsEEE20242nd from "./components/EEE/2024/2nd/LabPrograms";
//2025 1st semester
import NotesEEE20251st from "./components/EEE/2025/1st/Notes";
import AssignmentsEEE20251st from "./components/EEE/2025/1st/Assignments";
import MQPEEE20251st from "./components/EEE/2025/1st/MQP";
import PassingPackageEEE20251st from "./components/EEE/2025/1st/PassingPackage";
import LabProgramsEEE20251st from "./components/EEE/2025/1st/LabPrograms";

//AIML
//2025 1st semester
import NotesAIML20251st from "./components/AIML/2025/1st/Notes";
import AssignmentsAIML20251st from "./components/AIML/2025/1st/Assignments";
import MQPAIML20251st from "./components/AIML/2025/1st/MQP";
import PassingPackageAIML20251st from "./components/AIML/2025/1st/PassingPackage";
import LabProgramsAIML20251st from "./components/AIML/2025/1st/LabPrograms";


//cse 6th sem notes
import NoteModules from './components/CSE/2022/6th/NoteModules';
import LabProgramDetails from './components/CSE/2022/6th/LabProgramDetails';
import AssignmentDetails from './components/CSE/2022/6th/AssignmentDetails';
import MQPDetails from './components/CSE/2022/6th/MQPDetails';
import PassingPackageDetails from './components/CSE/2022/6th/PassingPackageDetails';
import NotesAPI from './components/CSE/2022/6th/NotesAPI';

//cse 7th sem notes
import NoteDetail from './components/CSE/2022/7th/NoteDetail';
import LabProgramDetail from './components/CSE/2022/7th/LabProgramDetail';
import AssignmentsDetails from './components/CSE/2022/7th/AssignmentsDetails';
import MQPDetail from './components/CSE/2022/7th/MQPDetail';
import PassingPackageDetail from './components/CSE/2022/7th/PassingPackageDetail';
//cse 4th sem notes
import NotesDetails from './components/CSE/2023/4th/NotesDetails';
import LabProgramsDetails from './components/CSE/2023/4th/LabProgramsDetails';
import AssignmentDetail from './components/CSE/2023/4th/AssignmentDetail';
import MQPsDetails from './components/CSE/2023/4th/MQPsDetails';
import PassingPackagesDetails from './components/CSE/2023/4th/PassingPackagesDetails';
//cse 5th sem notes
import Notesdetails from './components/CSE/2023/5th/Notesdetails';
import LabProgramsdetails from './components/CSE/2023/5th/LabProgramsdetails';
import Assignmentdetails from './components/CSE/2023/5th/Assignmentdetails';
import MQPdetails from './components/CSE/2023/5th/Assignmentdetails';
import PassingPackagedetails from'./components/CSE/2023/5th/PassingPackagedetails';
//cse 3rd sem notes
import NotesResource from './components/CSE/2024/3rd/NotesResource';
import LabProgramsResource from'./components/CSE/2024/3rd/LabProgramsResource';
import AssignmentsResource from './components/CSE/2024/3rd/AssignmentsResource';
import MQPQsResource from './components/CSE/2024/3rd/MQPsResource';
import PassingPackagesResource from './components/CSE/2024/3rd/PassingPackagesResources';
//cse 2nd sem notes
import NoteResource from './components/CSE/2024/2nd/NoteResource';
import LabProgramResource from'./components/CSE/2024/2nd/LabProgramResource';
import AssignmentResource from './components/CSE/2024/2nd/AssignmentResource';
import MQPQResource from './components/CSE/2024/2nd/MQPResource';
import PassingPackageResource from './components/CSE/2024/2nd/PassingPackageResource';
//cse 1st sem notes
import NotesResources from './components/CSE/2025/1st/NotesResources';
import LabProgramsResources from'./components/CSE/2025/1st/LabProgramsResources';
import AssignmentsResources from './components/CSE/2025/1st/AssignmentsResources';
import MQPQsResources from './components/CSE/2025/1st/MQPsResources';
import PassingPackagesResources from './components/CSE/2025/1st/PassingPackagesResources';

import TimeTable from './pages/TimeTable';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/timetable"element={<TimeTable/>}/>
        <Route path="/sgpa" element={<SGPAPage />} />
        <Route path="/cgpa" element={<CGPAPage />} />
        <Route path="/vtu-results" element={<VTUResultsPage />} />
        <Route path="/vtu-links" element={<VTULinksPage />} />
        <Route path="/updates" element={<LatestUpdatesPage />} />
        <Route path="/add-resource" element={<AddResourcePage />} />
        <Route path="/branches"element={<BranchesPage/>}/>
        <Route path="/:branch"element={<SchemePage/>}/>
        <Route path="/:branch/:scheme"element={<SemesterPage/>}/>
        <Route path="/:branch/:scheme/:semester"element={<SemesterDetails/>}/>

        
        {/* CSE 2022 - 6th Semester */}
        <Route path="/CSE/2022/6th/notes" element={<NotesCSE20226th />} />
        <Route path="/CSE/2022/6th/assignments" element={<AssignmentsCSE20226th />} />
        <Route path="/cse/2022/6th/mqps" element={<MQPCSE20226th />} />
        <Route path="/cse/2022/6th/package" element={<PassingPackageCSE20226th />} />
        <Route path="/cse/2022/6th/labs" element={<LabProgramsCSE20226th />} />
        {/* CSE 2022 - 7th Semester */}
        <Route path="/CSE/2022/7th/notes" element={<NotesCSE20227th />} />
        <Route path="/CSE/2022/7th/assignments" element={<AssignmentsCSE20227th />} />
        <Route path="/cse/2022/7th/mqps" element={<MQPCSE20227th />} />
        <Route path="/cse/2022/7th/package" element={<PassingPackageCSE20227th />} />
        <Route path="/cse/2022/7th/labs" element={<LabProgramsCSE20227th />} />
        {/* CSE 2023 - 4th Semester */}
        <Route path="/CSE/2023/4th/notes" element={<NotesCSE20234th />} />
        <Route path="/CSE/2023/4th/assignments" element={<AssignmentsCSE20234th />} />
        <Route path="/cse/2023/4th/mqps" element={<MQPCSE20234th />} />
        <Route path="/cse/2023/4th/package" element={<PassingPackageCSE20234th />} />
        <Route path="/cse/2023/4th/labs" element={<LabProgramsCSE20234th />} />
        {/* CSE 2023 - 5th Semester */}
        <Route path="/CSE/2023/5th/notes" element={<NotesCSE20235th />} />
        <Route path="/CSE/2023/5th/assignments" element={<AssignmentsCSE20235th />} />
        <Route path="/cse/2023/5th/mqps" element={<MQPCSE20235th />} />
        <Route path="/cse/2023/5th/package" element={<PassingPackageCSE20235th />} />
        <Route path="/cse/2023/5th/labs" element={<LabProgramsCSE20235th />} />
        {/* CSE 2024 - 3rd Semester */}
        <Route path="/CSE/2024/3rd/notes" element={<NotesCSE20243rd />} />
        <Route path="/CSE/2024/3rd/assignments" element={<AssignmentsCSE20243rd />} />
        <Route path="/cse/2024/3rd/mqps" element={<MQPCSE20243rd />} />
        <Route path="/cse/2024/3rd/package" element={<PassingPackageCSE20243rd />} />
        <Route path="/cse/2024/3rd/labs" element={<LabProgramsCSE20243rd />} />
        {/* CSE 2024 - 2nd Semester */}
        <Route path="/CSE/2024/2nd/notes" element={<NotesCSE20242nd />} />
        <Route path="/CSE/2024/2nd/assignments" element={<AssignmentsCSE20242nd />} />
        <Route path="/cse/2024/2nd/mqps" element={<MQPCSE20242nd />} />
        <Route path="/cse/2024/2nd/package" element={<PassingPackageCSE20242nd />} />
        <Route path="/cse/2024/2nd/labs" element={<LabProgramsCSE20242nd />} />
        {/* CSE 2025 - 1st Semester */}
        <Route path="/CSE/2025/1st/notes" element={<NotesCSE20251st />} />
        <Route path="/CSE/2025/1st/assignments" element={<AssignmentsCSE20251st />} />
        <Route path="/cse/2025/1st/mqps" element={<MQPCSE20251st />} />
        <Route path="/cse/2025/1st/package" element={<PassingPackageCSE20251st />} />
        <Route path="/cse/2025/1st/labs" element={<LabProgramsCSE20251st />} />


          {/* ECE 2022 - 6th Semester */}

        <Route path="/ECE/2022/6th/notes" element={<NotesECE20226th />} />
        <Route path="/ECE/2022/6th/assignments" element={<AssignmentsECE20226th />} />
        <Route path="/ECE/2022/6th/mqp" element={<MQPECE20226th />} />
        <Route path="/ECE/2022/6th/passing-package" element={<PassingPackageECE20226th />} />
        <Route path="/ECE/2022/6th/lab-programs" element={<LabProgramsECE20226th />} />
        {/* ECE 2022 - 7th Semester */}

        <Route path="/ECE/2022/7th/notes" element={<NotesECE20227th />} />
        <Route path="/ECE/2022/7th/assignments" element={<AssignmentsECE20227th />} />
        <Route path="/ECE/2022/7th/mqp" element={<MQPECE20227th />} />
        <Route path="/ECE/2022/7th/passing-package" element={<PassingPackageECE20227th />} />
        <Route path="/ECE/2022/7th/lab-programs" element={<LabProgramsECE20227th />} />
        {/* ECE 2023 - 4th Semester */}

        <Route path="/ECE/2023/4th/notes" element={<NotesECE20234th />} />
        <Route path="/ECE/2023/4th/assignments" element={<AssignmentsECE20234th />} />
        <Route path="/ECE/2023/4th/mqp" element={<MQPECE20234th />} />
        <Route path="/ECE/2023/4th/passing-package" element={<PassingPackageECE20234th />} />
        <Route path="/ECE/2023/4th/lab-programs" element={<LabProgramsECE20234th />} />
        {/* ECE 2023 - 5th Semester */}

        <Route path="/ECE/2023/5th/notes" element={<NotesECE20235th />} />
        <Route path="/ECE/2023/5th/assignments" element={<AssignmentsECE20235th />} />
        <Route path="/ECE/2023/5th/mqp" element={<MQPECE20235th />} />
        <Route path="/ECE/2023/5th/passing-package" element={<PassingPackageECE20235th />} />
        <Route path="/ECE/2023/5th/lab-programs" element={<LabProgramsECE20235th />} />
        
        {/* ECE 2024 - 2nd Semester */}
        <Route path="/ECE/2024/2nd/notes" element={<NotesECE20242nd />} />
        <Route path="/ECE/2024/2nd/assignments" element={<AssignmentsECE20242nd />} />
        <Route path="/ECE/2024/2nd/mqp" element={<MQPECE20242nd />} />
        <Route path="/ECE/2024/2nd/passing-package" element={<PassingPackageECE20242nd />} />
        <Route path="/ECE/2024/2nd/lab-programs" element={<LabProgramsECE20242nd />} />

        {/* ECE 2025 - 1st Semester */}
        <Route path="/ECE/2025/1st/notes" element={<NotesECE20251st />} />
        <Route path="/ECE/2025/1st/assignments" element={<AssignmentsECE20251st />} />
        <Route path="/ECE/2025/1st/mqp" element={<MQPECE20251st />} />
        <Route path="/ECE/2025/1st/passing-package" element={<PassingPackageECE20251st />} />
        <Route path="/ECE/2025/1st/lab-programs" element={<LabProgramsECE20251st />} />


        {/* ECE 2023 - 3rd Semester */}
        <Route path="/ECE/2024/3rd/notes" element={<NotesECE20243rd />} />
        <Route path="/ECE/2024/3rd/assignments" element={<AssignmentsECE20243rd />} />
        <Route path="/ECE/2024/3rd/mqp" element={<MQPECE20243rd />} />
        <Route path="/ECE/2024/3rd/passing-package" element={<PassingPackageECE20243rd />} />
        <Route path="/ECE/2024/3rd/lab-programs" element={<LabProgramsECE20243rd />} />


         {/* CIVIL 2022 - 6th Semester */}
        <Route path="/CIVIL/2022/6th/notes" element={<NotesCIVIL20226th />} />
        <Route path="/CIVIL/2022/6th/assignments" element={<AssignmentsCIVIL20226th />} />
        <Route path="/CIVIL/2022/6th/mqp" element={<MQPCIVIL20226th />} />
        <Route path="/CIVIL/2022/6th/passing-package" element={<PassingPackageCIVIL20226th />} />
        <Route path="/CIVIL/2022/6th/lab-programs" element={<LabProgramsCIVIL20226th />} />
        {/* CIVIL 2022 - 7th Semester */}
        <Route path="/CIVIL/2022/7th/notes" element={<NotesCIVIL20227th />} />
        <Route path="/CIVIL/2022/7th/assignments" element={<AssignmentsCIVIL20227th />} />
        <Route path="/CIVIL/2022/7th/mqp" element={<MQPCIVIL20227th />} />
        <Route path="/CIVIL/2022/7th/passing-package" element={<PassingPackageCIVIL20227th />} />
        <Route path="/CIVIL/2022/7th/lab-programs" element={<LabProgramsCIVIL20227th />} />
        {/* CIVIL 2023 - 4th Semester */}
        <Route path="/CIVIL/2023/4th/notes" element={<NotesCIVIL20234th />} />
        <Route path="/CIVIL/2023/4th/assignments" element={<AssignmentsCIVIL20234th />} />
        <Route path="/CIVIL/2023/4th/mqp" element={<MQPCIVIL20234th />} />
        <Route path="/CIVIL/2023/4th/passing-package" element={<PassingPackageCIVIL20234th />} />
        <Route path="/CIVIL/2023/4th/lab-programs" element={<LabProgramsCIVIL20234th />} />
        {/* CIVIL 2023 - 5th Semester */}
        <Route path="/CIVIL/2023/5th/notes" element={<NotesCIVIL20235th />} />
        <Route path="/CIVIL/2023/5th/assignments" element={<AssignmentsCIVIL20235th />} />
        <Route path="/CIVIL/2023/5th/mqp" element={<MQPCIVIL20235th />} />
        <Route path="/CIVIL/2023/5th/passing-package" element={<PassingPackageCIVIL20235th />} />
        <Route path="/CIVIL/2023/5th/lab-programs" element={<LabProgramsCIVIL20235th />} />
        {/* CIVIL 2024 - 3rd Semester */}
        <Route path="/CIVIL/2024/3rd/notes" element={<NotesCIVIL20243rd />} />
        <Route path="/CIVIL/2024/3rd/assignments" element={<AssignmentsCIVIL20243rd />} />
        <Route path="/CIVIL/2024/3rd/mqp" element={<MQPCIVIL20243rd />} />
        <Route path="/CIVIL/2024/3rd/passing-package" element={<PassingPackageCIVIL20243rd />} />
        <Route path="/CIVIL/2024/3rd/lab-programs" element={<LabProgramsCIVIL20243rd />} />
        {/* CIVIL 2024 - 2nd Semester */}
        <Route path="/CIVIL/2024/2nd/notes" element={<NotesCIVIL20242nd />} />
        <Route path="/CIVIL/2024/2nd/assignments" element={<AssignmentsCIVIL20242nd />} />
        <Route path="/CIVIL/2024/2nd/mqp" element={<MQPCIVIL20242nd />} />
        <Route path="/CIVIL/2024/2nd/passing-package" element={<PassingPackageCIVIL20242nd />} />
        <Route path="/CIVIL/2024/2nd/lab-programs" element={<LabProgramsCIVIL20242nd />} />
        {/* CIVIL 2025 - 1st Semester */}
        <Route path="/CIVIL/2025/1st/notes" element={<NotesCIVIL20251st />} />
        <Route path="/CIVIL/2025/1st/assignments" element={<AssignmentsCIVIL20251st />} />
        <Route path="/CIVIL/2025/1st/mqp" element={<MQPCIVIL20251st />} />
        <Route path="/CIVIL/2025/1st/passing-package" element={<PassingPackageCIVIL20251st />} />
        <Route path="/CIVIL/2025/1st/lab-programs" element={<LabProgramsCIVIL20251st />} />

         {/* EEE 2022 - 6th Semester */}
        <Route path="/EEE/2022/6th/notes" element={<NotesEEE20226th />} />
        <Route path="/EEE/2022/6th/assignments" element={<AssignmentsEEE20226th />} />
        <Route path="/EEE/2022/6th/mqp" element={<MQPEEE20226th />} />
        <Route path="/EEE/2022/6th/passing-package" element={<PassingPackageEEE20226th />} />
        <Route path="/EEE/2022/6th/lab-programs" element={<LabProgramsEEE20226th />} />
        {/* EEE 2022 - 7th Semester */}
        <Route path="/EEE/2022/7th/notes" element={<NotesEEE20227th />} />
        <Route path="/EEE/2022/7th/assignments" element={<AssignmentsEEE20227th />} />
        <Route path="/EEE/2022/7th/mqp" element={<MQPEEE20227th />} />
        <Route path="/EEE/2022/7th/passing-package" element={<PassingPackageEEE20227th />} />
        <Route path="/EEE/2022/7th/lab-programs" element={<LabProgramsEEE20227th />} />
        {/* EEE 2023 - 4th Semester */}
        <Route path="/EEE/2023/4th/notes" element={<NotesEEE20234th />} />
        <Route path="/EEE/2023/4th/assignments" element={<AssignmentsEEE20234th />} />
        <Route path="/EEE/2023/4th/mqp" element={<MQPEEE20234th />} />
        <Route path="/EEE/2023/4th/passing-package" element={<PassingPackageEEE20234th />} />
        <Route path="/EEE/2023/4th/lab-programs" element={<LabProgramsEEE20234th />} />
        {/* EEE 2023 - 5th Semester */}
        <Route path="/EEE/2023/5th/notes" element={<NotesEEE20235th />} />
        <Route path="/EEE/2023/5th/assignments" element={<AssignmentsEEE20235th />} />
        <Route path="/EEE/2023/5th/mqp" element={<MQPEEE20235th />} />
        <Route path="/EEE/2023/5th/passing-package" element={<PassingPackageEEE20235th />} />
        <Route path="/EEE/2023/5th/lab-programs" element={<LabProgramsEEE20235th />} />
        {/* EEE 2024 - 3rd Semester */}
        <Route path="/EEE/2024/3rd/notes" element={<NotesEEE20243rd />} />
        <Route path="/EEE/2024/3rd/assignments" element={<AssignmentsEEE20243rd />} />
        <Route path="/EEE/2024/3rd/mqp" element={<MQPEEE20243rd />} />
        <Route path="/EEE/2024/3rd/passing-package" element={<PassingPackageEEE20243rd />} />
        <Route path="/EEE/2024/3rd/lab-programs" element={<LabProgramsEEE20243rd />} />
        {/* EEE 2024 - 2nd Semester */}
        <Route path="/EEE/2024/2nd/notes" element={<NotesEEE20242nd />} />
        <Route path="/EEE/2024/2nd/assignments" element={<AssignmentsEEE20242nd />} />
        <Route path="/EEE/2024/2nd/mqp" element={<MQPEEE20242nd />} />
        <Route path="/EEE/2024/2nd/passing-package" element={<PassingPackageEEE20242nd />} />
        <Route path="/EEE/2024/2nd/lab-programs" element={<LabProgramsEEE20242nd />} />
        {/* EEE 2025 - 1st Semester */}
        <Route path="/EEE/2025/1st/notes" element={<NotesEEE20251st />} />
        <Route path="/EEE/2025/1st/assignments" element={<AssignmentsEEE20251st />} />
        <Route path="/EEE/2025/1st/mqp" element={<MQPEEE20251st />} />
        <Route path="/EEE/2025/1st/passing-package" element={<PassingPackageEEE20251st />} />
        <Route path="/EEE/2025/1st/lab-programs" element={<LabProgramsEEE20251st />} />
       

        {/* AIML 2025 - 1st Semester */}
        <Route path="/AIML/2025/1st/notes" element={<NotesAIML20251st/>} />
        <Route path="/AIML/2025/1st/assignments" element={<AssignmentsAIML20251st />} />
        <Route path="/AIML/2025/1st/mqp" element={<MQPAIML20251st />} />
        <Route path="/AIML/2025/1st/passing-package" element={<PassingPackageAIML20251st />} />
        <Route path="/AIML/2025/1st/lab-programs" element={<LabProgramsAIML20251st />} />
       {/* cse 6th sem notes*/}
      <Route path="/notes/:subjectSlug"element={<NoteModules/>}/>
      <Route path="/lab-programs/:subjectSlug"element={<LabProgramDetails/>}/>
      <Route path="/assignments/:subjectSlug"element={<AssignmentDetails/>}/>
      <Route path="/mqp/:subjectSlug"element={<MQPDetails/>}/>
      <Route path="/passing-package/:subjectSlug"element={<PassingPackageDetails/>}/>
      <Route path="/test-notes"element={<NotesAPI />}/>
        {/*cse 7th sem notes*/}
        <Route path="/CSE/2022/7th/notes/:subjectSlug" element={<NoteDetail/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramDetail/>}/>
      <Route path="/assignments/:subjectSlug" element={<AssignmentsDetails/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPDetail/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackageDetail/>}/>
      {/*cse 4th sem notes */}
      <Route path="/CSE/2023/4th/notes/:subjectSlug" element={<NotesDetails/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramsDetails/>}/>
      <Route path="/assignments/:subjectSlug" element={<AssignmentDetail/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPsDetails/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackagesDetails/>}/>
      {/*cse 5th sem notes */}
      
      <Route path="/CSE/2023/5th/notes/:subjectSlug" element={<Notesdetails/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramsdetails/>}/>
      <Route path="/assignments/:subjectSlug" element={<Assignmentdetails/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPdetails/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackagedetails/>}/>
      {/*cse 3rd sem notes */}
       <Route path="/CSE/2024/3rd/notes/:subjectSlug" element={<NotesResource/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramsResource/>}/>
      <Route path="/assignments/:subjectSlug" element={<AssignmentsResource/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPQsResource/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackagesResource/>}/>
      {/*cse 2nd sem notes */}
      <Route path="/CSE/2024/2nd/notes/:subjectSlug" element={<NoteResource/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramResource/>}/>
      <Route path="/assignments/:subjectSlug" element={<AssignmentResource/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPQResource/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackageResource/>}/>
      {/*cse 1st sem notes */}
      <Route path="/CSE/2025/2nd/notes/:subjectSlug" element={<NotesResources/>}/>
      <Route path="/lab-programs/:subjectSlug" element={<LabProgramsResources/>}/>
      <Route path="/assignments/:subjectSlug" element={<AssignmentsResources/>}/>
      <Route path="/mqp/:subjectSlug" element={<MQPQsResources/>}/>
      <Route path="/passing-package/:subjectSlug" element={<PassingPackagesResources/>}/>
      

        
             </Routes>
    </Router>
  );
}

export default App;
