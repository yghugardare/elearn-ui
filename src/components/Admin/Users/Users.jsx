import {
    Box,
    Button,
    Grid,
    Heading,
    HStack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react';
  import React, { useEffect } from 'react';
  import { RiDeleteBin7Fill } from 'react-icons/ri';
  import cursor from '../../../assets/images/cursor.png';
  import Sidebar from '../Sidebar';
  import { useDispatch, useSelector } from 'react-redux';
//   import { deleteUser, getAllUsers, updateUserRole,
//    } from '../../../redux/actions/admin';
  import toast from 'react-hot-toast';
//   import Loader from '../../Layout/Loader/Loader'
  
  const Users = () => {
    let loading = false
    // const { users, loading, error, message } = useSelector(state => state.admin);
  const users = [
    {
        _id:"#1111",
        name:"yash",
        email:"yash@gmail.com",
        role:"admin",
        subscription:{
            status:"active"
        },
        
    },
    {
        _id:"#2222",
        name:"Vrp",
        email:"vrp@gmail.com",
        role:"user",
        subscription:{
            status:"active"
        },
        
    },
    {
        _id:"#3333",
        name:"Sanskruti",
        email:"srw@gmail.com",
        role:"user",
        subscription:{
            status:"inactive"
        },
    },
    {
        _id:"#4444",
        name:"Hritik",
        email:"hrd@gmail.com",
        role:"admin",
        subscription:{
            status:"inactive"
        },
    },


  ]
    // const dispatch = useDispatch();
  
    const updateHandler = userId => {
    //   dispatch(updateUserRole(userId));
    alert("updated")
    };
    const deleteButtonHandler = userId => {
    //   dispatch(deleteUser(userId));
    alert("deleted")
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
  
    //   dispatch(getAllUsers());
    // }, [dispatch, error, message]);
  
    return (   
      <Grid
        css={{
          cursor: `url(${cursor}), default`,
        }}
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
      >
        <Box p={['0', '16']} overflowX="auto">
          <Heading
            textTransform={'uppercase'}
            children="All Users"
            my="16"
            textAlign={['center', 'left']}
          />
          {
            loading ? null : (
              <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size="lg">
                  <TableCaption>All available users in the database</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Id</Th>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>Role</Th>
                      <Th>Subscription</Th>
                      <Th isNumeric>Action</Th>
                    </Tr>
                  </Thead>
  
                  <Tbody>
                    {users &&
                      users.map(item => (
                        <Row
                          updateHandler={updateHandler}
                          deleteButtonHandler={deleteButtonHandler}
                          key={item._id}
                          item={item}
                          loading={loading}
                        />
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )
          }
        </Box>
        <Sidebar />
      </Grid>
    );
  };
  
  export default Users;
  
  function Row({ item, updateHandler, deleteButtonHandler, loading }) {
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>{item.name ? item.name : item.firstName + ' ' + item.lastName}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role}</Td>
        <Td>
          {item.subscription && item.subscription.status === 'active'
            ? 'Active'
            : 'Not Active'}
        </Td>
  
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              onClick={() => updateHandler(item._id)}
              variant={'outline'}
              color="purple.500"
              isLoading={loading}
            >
              Change Role
            </Button>
  
            <Button
              onClick={() => deleteButtonHandler(item._id)}
              color={'purple.600'}
              isLoading={loading}
            >
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  }
  