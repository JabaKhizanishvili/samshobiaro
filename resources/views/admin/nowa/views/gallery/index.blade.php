@extends('admin.nowa.views.layouts.app')

@section('styles')

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

@endsection

@section('content')



   <div class="container pt-4">
    <h2>Gallery</h2>

    <form action={{route('galleryaddimg')}} method="post" enctype="multipart/form-data">
@csrf
   <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" name='img' type="file" id="formFile" required>
  </div>
  <button class="btn btn-primary">add img</button>

</form>

@foreach ($img as $v)
    <img src={{asset('storage/images')."/".$v['name']}} width="auto" height="100"></img>
    <a class="btn btn-danger" href={{route('gallerydelimg',['id'=>$v['id']])}}>del</a>
@endforeach


<div class="jaba">
    {{$img->links('admin.vendor.pagination.material')}}
</div>
</div>
@endsection

@section('scripts')



@endsection
