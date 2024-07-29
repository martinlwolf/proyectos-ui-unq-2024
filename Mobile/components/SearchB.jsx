import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LineComponent, LupaIcon, Xicon } from '../assets/icons'
import { getSearch } from '../service/Api'
import PostThumbnail from './PostThumbnail'

const SearchB = () => {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [postNotNull, setPostNotNull] = useState(false)


  useEffect(() => {
    if (search) {
      getSearch(search)
        .then(({ data }) => {
          const limitedPosts = data?.posts.slice(0, 15);
          setPosts(limitedPosts);
          setPostNotNull(limitedPosts.length > 0);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setPosts([]);
      setPostNotNull(false);
    }
  }, [search]);



  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
        />
        <View style={{ padding: 10 }} >
          {(search != '') ?
            <TouchableOpacity onPress={() => { setSearch('') }} >
              <Xicon />
            </TouchableOpacity>
            :
            <LupaIcon />
          }
        </View>
      </View>

      <View style={styles.lineContainer}>
        <LineComponent />
      </View>

      <ScrollView style={{ height: '100%' }}>
        <View style={styles.posts}>
          {postNotNull ? (
            posts.map((post) => (
              <View key={post.id} style={styles.item}>
                <PostThumbnail post={post} />
              </View>
            ))
          )

            :
            <Text style={styles.text}>No se encontraron resultados</Text>
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    height: '100%',

    // padding: 10,
    backgroundColor: '#FFFFFF',
    gap: 20
  },
  text: {
    textAlign: 'center',
    color: '#AAAAAE',
    fontSize: 18,
  },

  lineContainer: {
    alignItems: 'center',
  },

  posts: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',

  },

  item: {
    backgroundColor: '#D9D9D9',
    borderColor: '#B0B0B4',
    borderWidth: 0.5,
    height: 250,
    width: '30%',
  },
  searchContainer: {
    marginVertical: 12,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#F1F1F2',
    borderRadius: 50,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 20
  },
});

export default SearchB