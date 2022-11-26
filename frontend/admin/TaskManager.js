import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, Text, Pressable, View, ScrollView, TextInput } from 'react-native';
import general from '../styles/General.js';

export default function TaskManager({navigation, route}) {
  // Hold params data from route
  const [ediMode, setEditMode] = useState(route.params.isEdit);
  const [task, setTask] = useState(route.params.task);
  // Task Model Attributes
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [starDate, setStartDate] = useState('YYYY-MM-DD');
  const [endDate, setEndDate] = useState('YYYY-MM-DD');
  const [status, setStatus] = useState('Ongoing');
  const [rate, setRate] = useState(0);
  // Hold which date should be update with the date picker
  const [pickStartDate, setPickStartDate] = useState(false);
  const [date, setDate] = useState(new Date());
  // Dropdown variables
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Employee 1', value: 0 },
    { label: 'Employee 2', value: 1 }
  ]);

  const goBack = () => {
    navigation.goBack()
  }

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
    if (task) {
      setName(task.name);
      setDesc(task.description);
      setStatus(task.status);
      setStatus(task.pay_rate);
      setStartDate(formatDate(task.start_date));
      setEndDate(formatDate(task.end_date));
    }
  }, []);

  return (
    <SafeAreaView style={general.container}>
      <Pressable onPress={goBack} style={general.returnBtn}>
        <Ionicons name="arrow-back" size={24}  style={{marginRight: 15}} color="#84B026" />
        {ediMode ? 
            <Text style={general.headline}>Task Editing</Text>
        :
        <Text style={general.headline}>Task</Text>
        }
      </Pressable>

      <ScrollView style={[general.fullW, general.paddingH]}>
        <TextInput style={general.inputs} value={name} placeholder='Name'/>

        <TextInput style={general.inputs} value={desc} placeholder='Description'/>

        <Text style={general.whiteTxt}>Task Responsable:</Text>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        style={{ marginBottom: 15, marginTop: 5 }}
        placeholder="None"
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems} />

        <Text style={[general.whiteTxt, {marginBottom: 5}]}>Hourly Rate:</Text>
        <TextInput style={general.inputs} value={rate} placeholder='$0.00'/>

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingHorizontal: 15,
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#fff',
      paddingVertical: 15,
    },
    logout: {
      width: '100%',
      paddingHorizontal: 15,
      marginBottom: 15,
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#BF1700',
      maxWidth: 200,
      marginTop: 15
    },
    btnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    whiteTxt: {
      color: '#fff',
      fontSize: 15,
      marginBottom: 5
    }
  });