<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $casts = [
        'available_days' => 'array',
    ];

    protected $fillable = ['name', 'hospital_id', 'speciality_id', 'available_days', 'start_time', 'end_time', 'max_patients_per_day'];

    public function hospital()
    {
        return $this->belongsTo(Hospital::class);
    }

    public function speciality()
    {
        return $this->belongsTo(Speciality::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function queueStatus()
    {
        return $this->hasOne(QueueStatus::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
