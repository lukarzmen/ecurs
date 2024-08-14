import CourseService from '@/services/CourseService';
import { ListItem } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, FlatList } from 'react-native';


const Sidebar = ({courseId, onLessonChanged}) => {

    const [course, setCourse] = useState([])

    
    const [expandedIndex, setExpandedIndex] = useState(null);
    const courseService = new CourseService();
    
    useEffect(() => {
        const fetchCourseStructure = async () => {
          try {
            const courseStructureResponse = await courseService.fetchCourseStructure(courseId);
            setCourse(courseStructureResponse)
    
            
            // Process the course structure data
          } catch (error) {
            // Handle error
          }
        };
    
        fetchCourseStructure();
      }, []);

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        const isExpanded = expandedIndex === index;
    
        function handleLessonClick(lesson: any): void {
          onLessonChanged(lesson.id)        
        }
    
        return (
          <ListItem.Accordion
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpandedIndex(isExpanded ? null : index)}
          >
            {item.lessons.map((lesson: any, lessonIndex: number) => (
              <ListItem
                key={lessonIndex}
                onPress={() => handleLessonClick(lesson)}
              >
                <ListItem.Content>
                  <ListItem.Title>{lesson.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </ListItem.Accordion>
        );
      };
    
    return (
        <View style={[styles.sidebar, { width: '20%' }]}>
        <FlatList
        data={course}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#4CAF50',
      padding: 20,
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
    },
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    sidebar: {
      width: 100,
      backgroundColor: '#f8f8f8',
      padding: 10,
    },
    sidebarText: {
      fontSize: 16,
    },
    content: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    contentText: {
      fontSize: 16,
    },
    footer: {
      backgroundColor: '#4CAF50',
      padding: 20,
      alignItems: 'center',
    },
    footerText: {
      color: '#fff',
      fontSize: 20,
    },
  });

  export default Sidebar;