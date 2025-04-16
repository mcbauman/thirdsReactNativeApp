import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default function MySectionedList(){
    const styles = StyleSheet.create({
        sectionHeader: {
            paddingTop: 2,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 2,
            fontSize: 14,
            fontWeight: 'bold',
            backgroundColor: 'rgba(247,247,247,1.0)',
          }
    })
    const myArrayOfObjects = [
        {
            title:"firstSection",
            data:[
                "one","two",'tree'
            ]
        },
        {
            title:'secondsSection',
            data:[
                'four','five', 'six', 'seven'
            ]
        }
    ]
    return(
        <View>
        <SectionList
          sections={
            myArrayOfObjects
        //    [
        //     {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        //     {
        //       title: 'J',
        //       data: [
        //         'Jackson',
        //         'James',
        //         'Jillian',
        //         'Jimmy',
        //         'Joel',
        //         'John',
        //         'Julie',
        //       ],
        //     },
        //   ]
        }
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}> {section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}
        />
      </View>
    )
}