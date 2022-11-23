import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Pressable, TextInput, ScrollView, View } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function ProjectManager({navigation, route}) {
  // Hold params data from route
  const [ediMode, setEditMode] = useState(route.params.isEdit);
  const [project, setProject] = useState(route.params.project);
  // Project Model Attributes
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [starDate, setStartDate] = useState('YYYY-MM-DD');
  const [endDate, setEndDate] = useState('YYYY-MM-DD');
  const [status, setStatus] = useState('Ongoing');
  const [tasks, setTasks] = useState(0);
  const [tasksComplete, setTasksComplete] = useState(0);
  const [cost, setCost] = useState(0);
  // Hold which date should be update with the date picker
  const [pickStartDate, setPickStartDate] = useState(false);

  const [date, setDate] = useState(new Date());

  const formatDate = (value) => {
    return new Date(value).toISOString().slice(0, 10);
  }

  const onChange = (event, selectedDate) => {
    if(pickStartDate) {
      setStartDate(formatDate(selectedDate));
    } else {
      setEndDate(formatDate(selectedDate));
    }
  };
  
  const goBack = () => {
      navigation.goBack()
  }

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = (isStartDate) => {
    setPickStartDate(isStartDate);
    showMode('date');
  };
    
  useEffect(() => {
    if (project) {
      setName(project.name);
      setDesc(project.description);
      setStatus(project.status);
      setStartDate(formatDate(project.start_date));
      setEndDate(formatDate(project.end_date));
      setTasks(project.task_number);
      setTasksComplete(project.task_complete);
      setCost(project.total_cost);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goBack} style={styles.head}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        {ediMode ? 
          <Text style={styles.headline}>PROJECT EDITING</Text>
        :
        <Text style={styles.headline}>PROJECT CREATION</Text>
        }
      </Pressable>

      <ScrollView style={styles.scroll}>
        <TextInput style={styles.inputs} value={name} placeholder='Name'/>

        <TextInput style={styles.inputs} value={desc} placeholder='Description'/>

        <Text style={styles.whiteTxt}>Start Date: </Text>
        <Pressable onPress={() => showDatepicker(true)} style={styles.datePicker}>
          <Text style={styles.datePickerTxt}>{starDate}</Text>
        </Pressable>

        <Text style={styles.whiteTxt}>End Date: </Text>
        <Pressable onPress={() => showDatepicker(false)} style={styles.datePicker}>
          <Text style={styles.datePickerTxt}>{endDate}</Text>
        </Pressable>


        {ediMode ? 
          <>
            <View style={styles.infoRow}>
              <Text style={styles.whiteTxt}>Task Number: </Text>
              <Text style={styles.whiteTxt}>{tasks}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.whiteTxt}>Total Cost: </Text>
              <Text style={styles.whiteTxt}>{cost}</Text>
            </View>

            <Pressable style={[styles.btn, styles.btnGreen]}>
                <Text style={styles.btnTxt}>Update</Text>
            </Pressable>

            <Pressable style={[styles.btn, styles.btnRed]}  onPress={() => goToScreen('Login')} >
                <Text style={[styles.btnTxt]}>Delete</Text>
            </Pressable>
          </>
        :
          <Pressable style={[styles.btn, styles.btnGreen]}>
            <Text style={styles.btnTxt}>Create</Text>
          </Pressable>
        }

        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    scroll: {
      width: '100%',
      paddingHorizontal: 15
    },
    head: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingLeft: 15,
      color: '#fff',
      paddingVertical: 15,
    },
    inputs: {
      backgroundColor: '#fff',
      width: '100%',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 8,
      marginBottom: 15
    },
    datePicker: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 8,
      marginBottom: 15
    },
    datePickerTxt: {
      color: '#959595',
      paddingVertical: 5,
    },
    btn: {
      width: '100%',
      paddingHorizontal: 15,
      marginBottom: 15,
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 15
  },
  btnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    btnGreen: {
        backgroundColor: '#84B026'
    },
    btnRed: {
      backgroundColor: '#BF1700'
    },
    btnBorder: {
        borderWidth: 2,
        borderColor: '#84B026'
    },
    greenTxt: {
        color: '#84B026',
    },
    infoRow: {
      flexDirection: 'row',
      marginBottom: 15
    },
    whiteTxt: {
      color: '#fff',
      fontSize: 15,
      marginBottom: 5
    }
  });