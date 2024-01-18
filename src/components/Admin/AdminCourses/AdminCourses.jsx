import { Box,  Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer,
    Tbody, Td, Th, Thead,  Tr, useDisclosure,} from '@chakra-ui/react';
  import React, { useState } from 'react';
//   import { useEffect } from 'react';
  import { RiDeleteBin7Fill } from 'react-icons/ri';
//   import { useDispatch, useSelector } from 'react-redux';
  import cursor from '../../../assets/images/cursor.png';
  import Sidebar from '../Sidebar';
  import CourseModal from './CourseModal';
//   import { getAllCourses,
//     getCourseLectures,
//   } from '../../../redux/actions/course';
//   import {
//   addLecture,
//   deleteCourse,
//   deleteLecture,
//   } from '../../../redux/actions/admin';
//   import toast from 'react-hot-toast';
  
  const AdminCourses = () => {
    // const { courses, lectures } = useSelector(state => state.course);
  
    // const { loading, error, message } = useSelector(state => state.admin);
  
    // const dispatch = useDispatch();
  const courses = [
    {
        _id:"c01",
        title:"NextJS course",
        category:"Web Development",
        views:300,
        numOfVideos:3,
        createdBy:"yashG",
        poster:{
            url : "data:image/png;base64,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"
        }
    },
    {
        _id:"c02",
        title:"Python course",
        category:"Artificial Intelligence",
        views:33,
        numOfVideos:6,
        createdBy:"john",
        poster:{
            url : "https://data-flair.training/wp-content/uploads/2020/06/free-python-certification-course-thumbnail.webp"
        }
    },
  ]
  const lectures = [
    {
      _id: 1,
      title: 'NextJS intro',
      description: "intro to next js, it's use cases and much more",
      num: 1,
      lectureId: 'ihwefihudwfw',
    },
    {
      _id: 2,
      title: 'NextJS States',
      description: "We discus various states in nextjs",
      num: 2,
      lectureId: 'ihwefwed1ihudwfw',
    },
    {
      _id: 2,
      title: 'NextJS Router',
      description: "We discus various roters in nextjs",
      num: 2,
      lectureId: 'iefwed1ihudwfw12',
    },
  ];
    const { isOpen, onClose, onOpen } = useDisclosure();
  
    const [courseId, setCourseId] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
  
    const coureDetailsHandler = (courseId, title) => {
    //   dispatch(getCourseLectures(courseId));
    alert("displaylist")
      onOpen();
      setCourseId(courseId);
      setCourseTitle(title);
    };
    const deleteButtonHandler = courseId => {
    //  dispatch(deleteCourse(courseId));
    alert("course deleted")
    };
  
    const deleteLectureButtonHandler = async (courseId, lectureId) => {
      console.log(courseId)
      console.log(lectureId)
      alert("deleted lecture")
    //   await dispatch(deleteLecture(courseId, lectureId));
    //   dispatch(getCourseLectures(courseId));
    };
  
    const addLectureHandler = async (e, courseId, title, description, video) => {
      e.preventDefault();
      const myForm = new FormData();
  
      myForm.append('title', title);
      myForm.append('description', description);
      myForm.append('file', video);
        alert("lecture   added")
    //   await dispatch(addLecture(courseId, myForm));
    //  dispatch(getCourseLectures(courseId));
    };
  
    // useEffect(() => {
    //   if (error) {
    //     toast.error(error);
    //     dispatch({ type: 'clearError' });
    //   }
  
    //   if (message) {
    //     toast.success(message);
    //     dispatch({ type: 'clearMessage' });
    //   }
    //   dispatch(getAllCourses());
    // }, [dispatch, error, message, onClose]);
  
    return (
      <Grid css={{ cursor: `url(${cursor}), default` }} minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']} >
        <Box p={['0', '8']} overflowX="auto">
          <Heading textTransform={'uppercase'}  children="All Courses"
            my="16" textAlign={['center', 'left']} />
          <TableContainer w={['100vw', 'full']}>
            <Table variant={'simple'} size="lg">
              <TableCaption>All available courses in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map(item => (
                  <Row
                    coureDetailsHandler={coureDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    // loading={loading}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
  
          <CourseModal
            isOpen={isOpen}
            onClose={onClose}
            id={courseId}
            courseTitle={courseTitle}
            deleteButtonHandler={deleteLectureButtonHandler}
            addLectureHandler={addLectureHandler}
            lectures={lectures}
            // loading={loading}
          />
        </Box>
        <Sidebar />
      </Grid>
    );
  };
  
  function Row({ item, coureDetailsHandler, deleteButtonHandler, loading =false}) {
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>
          <Image src={item.poster.url} />
        </Td>
        <Td>{item.title}</Td>
        <Td textTransform={'uppercase'}>{item.category}</Td>
        <Td>{item.createdBy}</Td>
        <Td isNumeric>{item.views}</Td>
        <Td isNumeric>{item.numOfVideos}</Td>
  
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              onClick={() => coureDetailsHandler(item._id, item.title)}
              variant={'outline'}
              color="purple.500"
            //   isLoading={loading}
            >
              View Lectures
            </Button>
  
            <Button
              onClick={() => deleteButtonHandler(item._id)}
              color={'purple.600'}
            //   isLoading={loading}
            >
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  }
  export default AdminCourses;