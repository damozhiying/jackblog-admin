(function () {
  'use strict';

  angular.module('jackblog.resources')
    .factory('Blog', function($resource,ServerUrl){
      var blogResource = $resource(ServerUrl + '/article/:id/:controller', {
          id: '@_id'
        },
        {
          addBlog:{
            method: 'POST',
            params: {
              id:'addArticle'
            }
          },
          getBlogList: {
            method: 'GET',
            params: {
              id:'getArticleList'
            }
          },
          updateBlog:{
            method: 'PUT',
            params:{
              controller: 'updateArticle'
            }
          },
          getBlog:{
            method: 'GET',
            params: {
              controller:'getArticle'
            }
          },
          fetchImage:{
            method:'POST',
            params:{
              id:'fetchImage'
            }
          },
          //前台数据
          getFrontBlogList:{
            method:'GET',
            params:{
              id:'getFrontArticleList'
            }
          },
          getFrontBlogCount:{
            method:'GET',
            params:{
              id:'getFrontArticleCount'
            }
          },
          getFrontArticle:{
            method:'GET',
            params:{
              controller:'getFrontArticle'
            }
          },
          getIndexImage:{
            method:'GET',
            params:{
              id:'getIndexImage'
            }
          },
          toggleLike:{
            method:'PUT',
            params:{
              controller:'toggleLike'
            }
          },
          getPrenext:{
            method:'GET',
            params:{
              controller:'getPrenext'
            }
          }
        });
      return {
        addBlog: function(data,callback){
          var cb = callback || angular.noop;
          return blogResource.addBlog(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        getBlogList:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getBlogList(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        updateBlog:function (id,data,callback) {
          var cb = callback || angular.noop;
          return blogResource.updateBlog({id:id},data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        deleteBlog:function(data,callback){
          var cb = callback || angular.noop;
          return blogResource.remove(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        //获取单篇博客
        getBlog:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getBlog(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        fetchImage:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.fetchImage(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        //前台数据
        getFrontBlogList:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getFrontBlogList(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        getFrontBlogCount:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getFrontBlogCount(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        getFrontArticle:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getFrontArticle(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        getIndexImage:function (callback) {
          var cb = callback || angular.noop;
          return blogResource.getIndexImage(function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        toggleLike:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.toggleLike(data,{},function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        },
        getPrenext:function (data,callback) {
          var cb = callback || angular.noop;
          return blogResource.getPrenext(data,function(result) {
            return cb(result);
          }, function(err) {
            return cb(err);
          }).$promise;
        }
      };


    });
})();

