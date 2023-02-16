import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = "http://ec2-3-7-55-32.ap-south-1.compute.amazonaws.com/api/v1";
// const API_ENDPOINT = "http://192.168.11.72:3000/api/v1";

export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_ENDPOINT}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState()).authSlice.token;
      if (token) {
        headers.set('authorization', `${token}`)
      }
      return headers
    },
  }),

  tagTypes: ["Reviews", "Spot"],

  endpoints: (builder) => ({

    //User Login
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "users/log_in",
        method: "POST",
        body: payload
      })
    }),

    createSpot: builder.mutation({
      query: (payload) => ({
        url: "spots",
        method: "POST",
        body: payload
      })
    }),

    editSpot: builder.mutation({
      query: ({ id, payload }) => ({
        url: `spots/${id}`,
        method: "PUT",
        body: payload
      }),
      invalidatesTags: ["Spot"],
    }),

    //Getting all Spots
    getSpots: builder.query({
      query: () => 'spots'
    }),

    //Getting Spot By id
    getSpotById: builder.query({
      query: ({ id }) => `spots/${id}`,
      providesTags: ["Reviews", "Spot"],
    }),

    //Getting all Spots
    getSpotsByLoc: builder.query({
      query: ({ id }) => `spots/spots_by_location?location=${id}`,
      providesTags: ["Reviews", "Spot"],
    }),

    //Getting all Locations
    getLocations: builder.query({
      query: () => 'spots/locations',
      providesTags: ["Spot"],
    }),

    //Get Queries
    getReviews: builder.query({
      query: ({ id }) => `spots/${id}/reviews`,
      providesTags: ["Reviews", "Spot"],
    }),

    createReview: builder.mutation({
      query: ({ id, payload }) => ({
        url: `spots/${id}/reviews`,
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["Reviews", "Spot"],
    }),

    editReview: builder.mutation({
      query: ({ id, reviewId, payload }) => ({
        url: `spots/${id}/reviews/${reviewId}`,
        method: "PUT",
        body: payload
      }),
      invalidatesTags: ["Reviews", "Spot"],
    }),

    getReviewById: builder.query({
      query: ({id, reviewId}) => `spots/${id}/reviews/${reviewId}`,
      providesTags: ["Spot", "Reviews"]
    }),

    getUserSpots: builder.query({
      query: () => `spots/current_user_spots`,
      providesTags: ["Spot", "Reviews"]
    }),

    getTopRatedSpots: builder.query({
      query: () => `spots/high_ranking_spots`
    }),
  })

})

export const {
  useLoginUserMutation,
  useCreateSpotMutation,
  useGetSpotsQuery,
  useGetLocationsQuery,
  useGetSpotsByLocQuery,
  useGetSpotByIdQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useGetUserSpotsQuery,
  useEditSpotMutation,
  useGetTopRatedSpotsQuery,
  useEditReviewMutation,
  useGetReviewByIdQuery
} = serverApi;
