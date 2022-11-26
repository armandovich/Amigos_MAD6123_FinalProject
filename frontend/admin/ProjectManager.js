import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Pressable, TextInput, ScrollView, View } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import general from '../styles/General.js';

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
    <SafeAreaView style={general.container}>
      <Pressable onPress={goBack} style={general.returnBtn}>
        <Ionicons name="arrow-back" size={24}  style={{marginRight: 15}} color="#84B026" />
        {ediMode ? 
          <Text style={general.headline}>Project Editing</Text>
        :
        <Text style={general.headline}>Project</Text>
        }
      </Pressable>

      <ScrollView style={[general.fullW, general.paddingH]}>
        <TextInput style={general.inputs} value={name} placeholder='Name'/>

        <TextInput style={general.inputs} value={desc} placeholder='Description'/>

        <Text style={general.whiteTxt}>Start Date: </Text>
        <Pressable onPress={() => showDatepicker(true)} style={general.datePicker}>
          <Text style={general.datePickerTxt}>{starDate}</Text>
        </Pressable>

        <Text style={general.whiteTxt}>End Date: </Text>
        <Pressable onPress={() => showDatepicker(false)} style={general.datePicker}>
          <Text style={general.datePickerTxt}>{endDate}</Text>
        </Pressable>


        {ediMode ? 
          <>
            <View style={[general.flexRow, {marginBottom: 15 }]}>
              <Text style={general.whiteTxt}>Task Number: </Text>
              <Text style={[general.whiteTxt, general.boldTxt, general.greenTxt]}>{tasks}</Text>
            </View>

            <View style={[general.flexRow, {marginBottom: 15 }]}>
              <Text style={general.whiteTxt}>Total Cost: </Text>
              <Text style={[general.whiteTxt, general.boldTxt, general.greenTxt]}>{cost}</Text>
            </View>

            <Pressable style={[general.btn, general.btnGreen]}>
                <Text style={[general.btnTxt]}>Update</Text>
            </Pressable>

            <Pressable style={[general.btn, general.btnRed]}  onPress={() => goToScreen('Login')} >
                <Text style={[general.btnTxt]}>Delete</Text>
            </Pressable>
          </>
        :
          <Pressable style={[general.btn, general.btnGreen]}>
            <Text style={general.btnTxt}>Create</Text>
          </Pressable>
        }
      </ScrollView>
    </SafeAreaView>
  );
}