
var app = angular.module('examEx19', [])
var studentsInfo = {};
var index = 0;

app.controller("ExamController", function ($scope, $http) {
    $scope.title = "Grades"
    $scope.index = 0;
      $scope.studentsInfo = studentsInfo;
    studentsInfo.allCourses = [
      {courseId : 1000,courseName: "Basic Programming"},
      {courseId : 1001,courseName: "Advanced Programming"},
      {courseId : 1003,courseName: "DataBase Intro"}];

    studentsInfo.students = [];
    studentsInfo.students.push({studentId : 0, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
    studentsInfo.students.push({studentId : 1, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
    studentsInfo.students.push({studentId : 2, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
    studentsInfo.students.push({studentId : 3, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});
        $scope.studentsInfo = studentsInfo.students;


  });
 app.filter('calculateAverage', function () {
    return function (index) {
         var   finalindex = index + 1
         var gradeOne = studentsInfo.students[finalindex].grades[0].grade|0
        var gradeTwo = studentsInfo.students[finalindex].grades[1].grade|0
        var gradeThree = studentsInfo.students[finalindex].grades[2].grade|0


       var newNum =  (gradeOne + gradeTwo + gradeThree)/3;

     if(newNum>0) {return newNum;} else {return "";}
    };
});
app.directive("gradeTable",function(){
    return {
        restrict: 'E',
        template : '<table class="table" style="width:80%;"><td> Name</td><td >Basic programming</td><td>Advanced programming</td><td>DataBase Intro</td><td>Average</td>' +
        '<tr ng-repeat="students in studentsInfo"><td >{{students.name  }}</td><td >{{students.grades[0].grade}} </td><td>{{students.grades[1].grade}} </td><td> {{students.grades[2].grade}}</td><td> {{$index-1  | calculateAverage}} </td></tr></table>'

    };
});


